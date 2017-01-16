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
    return Vue.http.get('http://localhost:3003/data/sites/'+ siteId)
      .then(res => res.json())
      .then((currSite) => {        
        return currSite;
      })
    }
}
