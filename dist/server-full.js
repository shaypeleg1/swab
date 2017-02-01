// Minimal Simple REST API Handler (With MongoDB and Socket.io)
// Plus support for simple login and session
// Plus support for file upload
"use strict";

const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongodb = require('mongodb')

const clientSessions = require("client-sessions");
const multer = require('multer')
const ObjectId = mongodb.ObjectID;

// Main server url's
const serverRoot = '/';
const baseUrl = serverRoot + 'data';
// const DB_URL = 'mongodb://localhost:27017/swab';
const DB_URL = 'mongodb://swabuser:misterbit@ds117209.mlab.com:17209/swab';


// Configure where uploaded files are going
const uploadFolder = '/uploads';
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname + uploadFolder);
	},
	filename: function (req, file, cb) {
		cl('file', file);
		const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
		cb(null, file.fieldname + '-' + Date.now() + ext)
	}
})


var upload = multer({
	storage: storage
})

// const app = express();

var corsOptions = {
	origin: /http:\/\/localhost:\d+/,
	credentials: true
};

app.use(express.static('uploads'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(clientSessions({
	cookieName: 'session',
	secret: 'C0d1ng 1s fun 1f y0u kn0w h0w', // set this to a long random string!
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
}));

const http = require('http').Server(app);
const io = require('socket.io')(http);

// connection to DB
function dbConnect() {
	return new Promise((resolve, reject) => {
		// Connection URL
		// var DB_URL = 'mongodb://localhost:27017/swab';
		var DB_URL = 'mongodb://swabuser:misterbit@ds117209.mlab.com:17209/swab';
		// Use connect method to connect to the Server
		mongodb.MongoClient.connect(DB_URL, function (err, db) {
			if (err) {
				cl('Cannot connect to DB', err)
				reject(err);
			} else {
				resolve(db);
			}
		});
	});
}

// GETs a list of sites (other db will be rejected)
app.get('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	if (objType !== 'sites'){res.json(403, {error: 'unauthorized'})
		return;
	}
	else {
		dbConnect().then((db) => {
			const collection = db.collection(objType);

			collection.find({}).toArray((err, objs) => {
				if (err) {
					cl('Cannot get a list of ', err)
					res.json(404, {
						error: 'not found'
					})
				} else {
					res.json(objs);
				}
				db.close();
			});
		});
	}
});

// GETs a single
app.get('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	dbConnect()
		.then((db) => {
			const collection = db.collection(objType);
			let _id = new mongodb.ObjectID(objId);

			collection.find({
				_id: _id
			}).toArray((err, objs) => {
				if (err) {
					cl('Cannot get that ', err)
					res.json(404, {
						error: 'not found'
					})
				} else {
					res.json(objs[0]);
				}
				db.close();
			});
		});
});



// DELETE
app.delete('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.deleteOne({
			_id: new mongodb.ObjectID(objId)
		}, (err, result) => {
			if (err) {
				cl('Cannot Delete', err)
				res.json(500, {
					error: 'Delete failed'
				})
			} else {
				res.json({});
			}
			db.close();
		});

	});

});

// POST - adds 
app.post('/data/:objType', upload.single('file'), function (req, res) {
	const objType = req.params.objType;
	const obj = req.body;
	if (req.body.sitesToGet) {
		getManySites(req.body.sitesToGet, res);
	} else if (req.body.newSiteData) { // there is newSiteData => make new site
		//call function to make newsite
		makeNewSite(obj.newSiteData, objType, res);
	} else {
		delete obj._id;
		// If there is a file upload, add the url to the obj
		if (req.file) {
			obj.imgUrl = serverRoot + req.file.filename;
		}
		dbConnect().then((db) => {
			const collection = db.collection(objType);
			collection.insert(obj, (err, result) => {
				if (err) {
					cl(`Couldnt insert a new ${objType}`, err)
					res.json(500, {
						error: 'Failed to add'
					})
				} else {
					res.json(obj);
					db.close();
				}
			});
		});
	}
});

// Get sites preview
function getManySites(sitesToGet, res) {
	const query = getIdArray(sitesToGet);
	dbConnect().then((db) => {
		const collection = db.collection('sites');
		collection.find(query, {
			_id: 1,
			siteInfo: 1
		}).toArray((err, objs) => {
			if (err) {
				cl('cannot get a list');
			} else {
				res.json(objs);
			}
			db.close();
		});
	});
}
// Build an array from sites id's
function getIdArray(idsOfSites) {
	let queryObj = {
		$or: []
	}
	idsOfSites.forEach(siteId => {
		queryObj['$or'].push({
			_id: ObjectId(siteId)
		})
	})
	return queryObj;
}

function makeNewSite(newSiteData, objType, res) {
	// Get site template data based on the siteId,
	let templateSite = null
	let templateSiteID = ObjectId(newSiteData.siteId);
	dbConnect().then((db) => {
		const sitesCollection = db.collection('sites');
		const usersCollection = db.collection('users');
		sitesCollection.find({
			_id: templateSiteID
		}).toArray((err, objs) => {
			if (err) {
				cl('Cannot get that ', err)
				res.json(404, {
					error: 'not found'
				})
			} else {
				// add new site to user collection
				templateSite = objs[0];
				delete templateSite._id;
				sitesCollection.insert(templateSite, (err, result) => {
					if (err) {
						cl('there is an error')
					} else {
						templateSite._id = result.ops[0]._id;
						usersCollection.update({ _id: ObjectId(newSiteData.userId) }, { $push: { sites: templateSite._id } }, (er, result) => {
							if (err) {
								cl('cant find user')
							}
							else {
								res.json(templateSite);
								db.close();
							}
						})
					}
				})
			}

		})

	})
}


app.put('/data/:objType/', function (req, res) {
	const objType = req.params.objType;
	const newObj = req.body;
	if (newObj._id && typeof newObj._id === 'string') newObj._id = new mongodb.ObjectID(newObj._id);
	cl(`Requested to UPDATE the ${objType} with id: ${newObj._id}`);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.updateOne({
			_id: newObj._id
		}, newObj,
			(err, result) => {
				if (err) {
					cl('Cannot Update', err)
					res.json(500, {
						error: 'Update failed'
					})
				} else {
					res.json(newObj);

				}
				db.close();
			});
	});
});

// Basic Login/Logout/Protected assets
app.post('/login', function (req, res) {
	login(req, res)
});

function login(req, res) {
	dbConnect().then((db) => {
		db.collection('users').findOne({
			email: req.body.email,
			pass: req.body.pass
		}, function (err, user) {
			if (user) {
				delete user.pass;
				req.session.user = user; //refresh the session value
				res.json({
					token: 'Beareloginr: puk115th@b@5t',
					user
				});
			} else {
				cl('Login NOT Succesful');
				req.session.user = null;
				res.json(403, {
					error: 'Login failed'
				})
			}
		});
	});

}

app.post('/signup', function (req, res) {
	const newUserObj = req.body;
	dbConnect().then((db) => {
		const collection = db.collection('users');
		cl('user', newUserObj)
		collection.findOne({
			email: req.body.email,
			pass: req.body.pass
		}, function (err, user) {
			if (user) {
				cl('Login Succesful');
				res.json(403, {
					error: 'user allready exists'
				});
			} else {
				collection.insert(newUserObj, (err, result) => {
					if (err) {
						cl(`Couldnt insert a new user`)
						res.json(500, {
							error: 'Failed to add'
						})
					} else {
						cl(newUserObj + " added");
						login(req, res);
					}
				});

			}
		});
	});

});


app.get('/logout', function (req, res) {
	req.session.reset();
	res.end('Loggedout');
});

function requireLogin(req, res, next) {
	if (!req.session.user) {
		cl('Login Required');
		res.json(403, {
			error: 'Please Login'
		})
	} else {
		next();
	}
};
app.get('/protected', requireLogin, function (req, res) {
	res.end('User is loggedin, return some data');
});

// Kickup our server 
// Note: app.listen will not work with cors and the socket
// app.listen(3003, function () {
http.listen(3003, function () {
	console.log(`misterREST server is ready at ${baseUrl}`);
	console.log(`GET (list): \t\t ${baseUrl}/{entity}`);
	console.log(`GET (single): \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`DELETE: \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`PUT (update): \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`POST (add): \t\t ${baseUrl}/{entity}`);
});

function cl(...params) {
	console.log.apply(console, params);
}