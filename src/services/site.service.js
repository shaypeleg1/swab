import Vue from 'vue';
import serverConfig from './services-config.js';


export default {
  updateSite(data) {
    let dataJson = JSON.stringify(data);
    return Vue.http.put(serverConfig.serverUrl+'data/sites', dataJson)
      .then((res) => {
        return res;
      })
  },
  getSingleSite(siteId) {
    return Vue.http.get(serverConfig.serverUrl+'data/sites/' + siteId)
      .then(res => res.json())
      .then((currSite) => {
        return currSite;
      })
  },
  // is called by currentSite.module
  getManySites(siteIdArray) {

    return Vue.http.post(serverConfig.serverUrl+'data/sites/', {
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
    return Vue.http.post(serverConfig.serverUrl+'data/sites/', {
        newSiteData
      })
      .then(res => {
        console.log('(04) returned new site:', res.json());
        return res.json()
      })
  }
}
