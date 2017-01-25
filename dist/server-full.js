// Minimal Simple REST API Handler (With MongoDB and Socket.io)
// Plus support for simple login and session
// Plus support for file upload
// Author: Yaron Biton misterBIT.co.il

"use strict";
const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongodb = require('mongodb')

const clientSessions = require("client-sessions");
const multer = require('multer')
const ObjectId = mongodb.ObjectID;

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

//const app = express();

var corsOptions = {
	origin: /http:\/\/localhost:\d+/,
	credentials: true
};

const serverRoot = '/';
const baseUrl = serverRoot + 'data';

cl('Loaded server-full.js');

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

function dbConnect() {

	return new Promise((resolve, reject) => {
		// Connection URL
		//var url = 'mongodb://localhost:27017/swab';
		var url = 'mongodb://swabuser:misterbit@ds117209.mlab.com:17209/swab';
		// Use connect method to connect to the Server
		mongodb.MongoClient.connect(url, function (err, db) {
			if (err) {
				reject(err);
			} else {
				resolve(db);
			}
		});
	});
}

// GETs a list
app.get('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	dbConnect().then((db) => {
		const collection = db.collection(objType);

		collection.find({}).toArray((err, objs) => {
			if (err) {
				res.json(404, {
					error: 'not found'
				})
			} else {
				res.json(objs);
			}
			db.close();
		});
	});
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
		// get many sites
		getManySites(req.body.sitesToGet, res);
		// res.json(objs);
		
	} 
	/* this will request a defualt site, not sure if i need it */
	// else if (req.body.makeNewSite) { 
	// 	// function accepts an object with id of user and components of a site
	// 	makeNewSite(req.body.makeNewSiteID) {

	// 	}
	// } 
	else {
		delete obj._id;
		// If there is a file upload, add the url to the obj
		if (req.file) {
			obj.imgUrl = serverRoot + req.file.filename;
		}
		dbConnect().then((db) => {
			const collection = db.collection(objType);

			collection.insert(obj, (err, result) => {
				if (err) {
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

function queryBuilder(idsOfSites) {
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
// get sites
function getManySites(sitesToGet, res) {
	const query = queryBuilder(sitesToGet);
	dbConnect().then((db) => {
		const collection = db.collection('sites');
		collection.find(query, {
			_id: 1,
			siteInfo: 1
		}).toArray((err, objs) => {
			if (err) {
			} else {
				res.json(objs);
			}
			db.close();
		});
	});
}


// function accepts an object with id of user and components of a site
function makeNewSite(newSiteObjID){
// this is just an id to a defualt site
}
// PUT - updates

app.put('/data/:objType/', function (req, res) {
	const objType = req.params.objType;
	const newObj = req.body;
	if (newObj._id && typeof newObj._id === 'string') newObj._id = new mongodb.ObjectID(newObj._id);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.updateOne({
				_id: newObj._id
			}, newObj,
			(err, result) => {
				if (err) {
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
				req.session.user = null;
				res.json(403, {
					error: 'Login failed'
				})
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

// Some small time utility functions
function cl(...params) {
	console.log.apply(console, params);
}

