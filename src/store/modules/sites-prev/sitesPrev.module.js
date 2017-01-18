import siteService from '../../../services/site.service';

const GET_SITES_PREV = 'GET_SITES_PREV';

const state = {
  sitesPrev: []
}

const mutations = {
  [GET_SITES_PREV](state, res) {
    // console.log('coming from dispatch getManySites', ...res);
    state.sitesPrev = [];
    state.sitesPrev.push(...res);

  },

}
const actions = {

  getSites({
    commit
  }, idOfSites) {
    // console.log('home.component.js -> [sitesPrev.module -> F:getSites =>> site.service ]', idOfSites)
    siteService.getManySites(idOfSites)
      .then(res => {
        // console.log('site.service -> [sitePrev -> F:getManySites] =>> GET_SITES_PREV',res)
        commit(GET_SITES_PREV,
          res
        )
      })
  }
}


const getters = {
  sitesToPrevFunc: state => state.sitesPrev,
  getDefaultSiteId: state => state.defualtSiteId
};

export default {
  state,
  mutations,
  actions,
  getters,
}
