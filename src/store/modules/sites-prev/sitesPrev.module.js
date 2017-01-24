import siteService from '../../../services/site.service';

const GET_SITES_PREV = 'GET_SITES_PREV';

const state = {
  sitesPrev: []
}

const mutations = {
  [GET_SITES_PREV](state, res) {
    state.sitesPrev = [];
    state.sitesPrev.push(...res);
  },

}
const actions = {

  getSites({commit}, idOfSites) {
    console.log('getting preview sites of: ', idOfSites);
    siteService.getManySites(idOfSites)
      .then(res => {

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
