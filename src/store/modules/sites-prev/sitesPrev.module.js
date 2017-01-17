import siteService from '../../../services/site.service';

const GET_SITES_PREV = 'GET_SITES_PREV';

const state = {
  sitesPrev: [],
  defualtSiteId:"587e2fb49f8d447e4e1cbb55"
}

const mutations = {
  [GET_SITES_PREV](state, res) {
    console.log('coming from dispatch getManySites', ...res);
    state.sitesPrev = [];
    state.sitesPrev.push(...res);

  },
}
const actions = {

  getSites({
    commit
  }, idOfSites) {
    console.log('home.component.js -> [sitesPrev.module -> F:getSites =>> site.service ]', idOfSites)
    siteService.getManySites(idOfSites)
      .then(res => {
        console.log('site.service -> [sitePrev -> F:getManySites] =>> GET_SITES_PREV',res)
        commit(GET_SITES_PREV,
          res
        )
      })
  },
  makeNewSite({commit},userId){
    console.log('inside sitePrev making new site');
    // make new site in server
    //request the data of defualt site as i get sitePrev 
    // siteService.
  },
  
}

const getters = {
  sitesToPrevFunc  : state => state.sitesPrev,
  getDefaultSiteId : state => state.defualtSiteId
};

export default {
  state,
  mutations,
  actions,
  getters,
}
