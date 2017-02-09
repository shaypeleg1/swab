import Vue from 'vue';


export default {
  updateSite(data) {
    let dataJson = JSON.stringify(data);
    return Vue.http.put('data/sites/', dataJson)
      .then((res) => {
        return res;
      })
  },
  deleteSite(siteId) {
    return Vue.http.delete('data/sites/' + siteId)
      .then((res) => {
        return res;
      })
  },
  getSingleSite(siteId) {
    return Vue.http.get('data/sites/' + siteId)
      .then(res => res.json())
      .then((currSite) => {
        return currSite;
      })
  },
  // is called by currentSite.module
  getManySites(siteIdArray) {
    return Vue.http.post('data/sites/', {
      sitesToGet: siteIdArray
    })
      .then(res => res.json())
      .then(res => {
        return res
      });
  },
  /*recives: id of tempalte sites */
  createNewSite(newSiteData) {
    // getting new site based on id
    return Vue.http.post('data/sites/', {
      newSiteData
    })
      .then(res => {
        return res.json()
      })
  }
}
