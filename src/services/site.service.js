import Vue from 'vue';

export default {
  updateSite(data) {
    let dataJson = JSON.stringify(data);
    console.log('in the actions of siteCRUD',dataJson);
    return Vue.http.put('http://localhost:3003/data/sites', dataJson)
      .then(res => res.json())
      .then(({
        token,
        user
      }) => {
        console.log('updating the user site:', user);
        setSession(token, user);
      })
      //         app.post('/data/:objType', upload.single('file'), function (req, res) {
      // 	//console.log('req.file', req.file);
      // 	// console.log('req.body', req.body);

    // 	const objType = req.params.objType;
    // 	cl("POST for " + objType);

    // 	const obj = req.body;
    // 	delete obj._id;
    // 	// If there is a file upload, add the url to the obj
    // 	if (req.file) {
    // 		obj.imgUrl = serverRoot + req.file.filename;
    // 	}

    // 	dbConnect().then((db) => {
    // 		const collection = db.collection(objType);

    // 		collection.insert(obj, (err, result) => {
    // 			if (err) {
    // 				cl(`Couldnt insert a new ${objType}`, err)
    // 				res.json(500, {error: 'Failed to add'})
    // 			} else {
    // 				cl(objType + " added");
    // 				res.json(obj);
    // 				db.close();
    // 			}
    // 		});
    // 	});

    // });
  },
    getSingleSite(siteId) {
    console.log('getting site with id: ', siteId);
    return Vue.http.get('http://localhost:3003/data/sites/'+siteId)
      .then(res => res.json())
      .then((currSite) => {
        return currSite;
      })
    }
}
