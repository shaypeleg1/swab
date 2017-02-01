import siteService from '../../../services/site.service';

const GET_SITES_PREV = 'GET_SITES_PREV';
const DELETE_SITE = 'DELETE_SITE';

const state = {
  sitesPrev: []
}

const mutations = {
  [GET_SITES_PREV](state, res) {
    state.sitesPrev = [];
    state.sitesPrev.push(...res);
  },
  [DELETE_SITE](state, siteId) {
    let siteIdx = state.sitesPrev.indexOf(siteId);
    state.sitesPrev.splice(siteIdx,1);
  },
}
const actions = {

  getSites({commit}, idOfSites) {
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
