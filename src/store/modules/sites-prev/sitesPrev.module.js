import siteService from '../../../services/site.service';

const GET_SITES_PREV = 'GET_SITES_PREV';

const state = {
  sitesPrev: []
}

const mutations = {
  [GET_SITES_PREV](state, res) {
    console.log('coming from dispatch getManySites', res);
    console.log('this is sitesPrev',state);
    state.sitesPrev.push(...res);

  },
}
const actions = {

  getSites({
    commit
  }, idOfSites) {
    console.log('inside currentSite getSites', idOfSites)
    siteService.getManySites(idOfSites)
      .then(res => {
        commit(GET_SITES_PREV,
          res
        )
      })
  }
}

const getters = {
  sitesToPrev: state => state.sitesPrev
};

export default {
  state,
  mutations,
  actions,
  getters,
}
