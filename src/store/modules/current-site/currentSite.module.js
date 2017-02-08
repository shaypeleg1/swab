import siteService from '../../../services/site.service';
import authModule from '../../../store/modules/auth/auth.module';
import sitesPrevModule from '../../../store/modules/sites-prev/sitesPrev.module';


export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'
const ADD_COMP = 'ADD_COMP';
const DELETE_COMP = 'DELETE_COMP';
const UPDATE_PROPS = 'UPDATE_PROPS';
const GET_SINGLE_SITE = 'GET_SINGLE_SITE';
const GET_SITES_PREV = 'GET_SITES_PREV';
const GET_NEW_SITE = 'GET_NEW_SITE';
const ADD_USER_SITE = 'auth/ADD_USER_SITE';
const UPDATE_NAME = 'UPDATE_NAME';
const DELETE_SITE = 'DELETE_SITE';
const DELETE_USER_SITE = 'auth/DELETE_USER_SITE';


const compsTemplatesInterfaces = {
  mainArticlePreview: {
    name: "component-template1",
    type: "mainArticlePreview",
    props: {
      title: "component-template - first template",
      subtitle: "Powered by Vue.js",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      button: "LEARN MORE",
      img_src: ""
    }
  },
  circlePreview: {
    name: "component-template1",
    type: "circlePreview",
    props: {
      title: "component-template - secound template",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      img_src: ""
    }
  },
  shortArticlePreview: {
    name: "component-template1",
    type: "shortArticlePreview",
    props: {
      title: "component-template - third template",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      button: "MORE",
      img_src: ""
    }
  },
}

const state = {
  _id: '',
  siteInfo: {
    siteUrl: '',
    siteName: '',
  },
  components: [{
    name: "",
    type: "",
    props: {}
  }]
}

const mutations = {
  [CHANGE_NAME](state, payload) {
    state.siteInfo.siteName = payload;
  },
  [CHANGE_URL](state, payload) {
    state.siteInfo.siteUrl = payload;
  },
  [ADD_COMP](state, {
    newCompData,
    indexToInsert
  }) {
    state.components.splice(indexToInsert, 0, newCompData);
  },

  [GET_SINGLE_SITE](state, res) {
    state._id = res._id;
    state.siteInfo = res.siteInfo;
    state.components = res.components;
  },
  [UPDATE_PROPS](state, newCompValueObj) {
    let compIdx = newCompValueObj.compIdx;
    let propValue = newCompValueObj.textValue;
    let propType = newCompValueObj.propToChange;
    state.components[compIdx].props[propType] = propValue;
  },
  [DELETE_COMP](state, {
    type
  }) {
    state.components.splice(Number(type), 1);
  },
  [GET_NEW_SITE](state, res) {
    state._id = res._id;
    state.siteInfo = res.siteInfo;
    state.components = res.components;
    return res._id;
  },
}

const actions = {
  addComp({
    commit
  }, compData) {
    let newCompData = (JSON.parse(JSON.stringify(compsTemplatesInterfaces[compData.compType]))); // Deep cloning
    let indexToInsert = compData.indexToInsert;
    commit(ADD_COMP, {
      newCompData,
      indexToInsert
    });
  },
  deleteComp({
    commit
  }, type) {
    commit(DELETE_COMP, {
      type
    });
  },
  updateProps({
    commit
  }, newCompValueObj) {

    commit(UPDATE_PROPS,
      newCompValueObj
    );
  },
  getSite({commit}, siteId) {    
    siteService.getSingleSite(siteId)
      .then(res => {
        commit(GET_SINGLE_SITE, res)
      })
  },

  saveSite() {
   return siteService.updateSite(state)
      .then(res => {
      })
  },
  
  createNewSite({commit}, newSiteData) {
   return siteService.createNewSite(newSiteData)
      .then(res => {
        commit(GET_NEW_SITE, res);
        commit(ADD_USER_SITE, res._id);
        
        })
  },
  deleteSite({commit}, siteId){
    return siteService.deleteSite(siteId)
      .then (res => {
        commit(DELETE_USER_SITE, siteId);
        commit(DELETE_SITE, siteId);
      })
  },
}

const getters = {
  templatesList: state => Object.keys(compsTemplatesInterfaces),
  currSiteId: state => state._id,
  currSiteName: state => state.siteInfo.siteName
};

export default {
  state,
  actions,
  mutations,
  getters
}
