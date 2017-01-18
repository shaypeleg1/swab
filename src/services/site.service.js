import Vue from 'vue';

export default {
  updateSite(data) {
    let dataJson = JSON.stringify(data);
    return Vue.http.put('http://localhost:3003/data/sites', dataJson)
      .then((res) => {
        return res;
      })
  },
  getSingleSite(siteId) {
    return Vue.http.get('http://localhost:3003/data/sites/' + siteId)
      .then(res => res.json())
      .then((currSite) => {
        return currSite;
      })
  },
  // is called by currentSite.module
  getManySites(siteIdArray) {
    console.log('sitePrev -> [site.service -> F:getManySites]', siteIdArray);

    return Vue.http.post('http://localhost:3003/data/sites/', {
        sitesToGet: siteIdArray
      })
      .then(res => res.json())
      .then(res => {
        // console.log('server-full -> [site.service -> F:getManySites] this is the server res', res)
        return res
      });
  },
  /*recives: id of tempalte sites */
  createNewSite(newSiteData) {
    console.log('(03) createNewSite in site.service =>> server post,siteId: ', newSiteData)
      // getting new site based on id
    return Vue.http.post('http://localhost:3003/data/sites/', {
        newSiteData
      })
      .then(res => {
        return res.json()
      })
  }
}
