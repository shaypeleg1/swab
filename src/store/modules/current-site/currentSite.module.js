import siteService from '../../../services/site.service';


export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'
const ADD_COMP = 'ADD_COMP';
const DELETE_COMP = 'DELETE_COMP';
const UPDATE_PROPS = 'UPDATE_PROPS';
const GET_SINGLE_SITE = 'GET_SINGLE_SITE';
const GET_SITES_PREV = 'GET_SITES_PREV';
const GET_NEW_SITE = 'GET_NEW_SITE';
const UPDATE_NAME = 'UPDATE_NAME';


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
  siteInfo: { // Itay, please change that to a more sutible data name
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
    console.log('payload', state);
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
  }
}

const actions = {
  addComp({
    commit
  }, compData) {
    console.log(compData)
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
    console.log(newCompValueObj);

    commit(UPDATE_PROPS,
      newCompValueObj
    );
  },
  getSite({
    commit
  }, siteId) {
    siteService.getSingleSite(siteId)
      .then(res => {
        console.log('Got site: ', res);

        commit(GET_SINGLE_SITE, res)
      })
      // .then()
  },

  saveSite() {
    siteService.updateSite(state)
      .then(res => {
        console.log('save site', res)
      })
  },
  createNewSite({
    commit
  }, newSiteData) {
    console.log('(02)  sitePrev making new site =>> site.service, siteId:', newSiteData);
    siteService.createNewSite(newSiteData)
      .then(res => {
        console.log('this is the response after getting new site:', res);
        commit(GET_NEW_SITE,res);
        return state._id
        // return res;
      })
      .then(res => {
                console.log('this is the new returned site:',res)
        return res;
      })
  },
  // updateName({commit},name){
  //   commit(CHANGE_NAME,name)
  // }
}

const getters = {
  templatesList: state => Object.keys(compsTemplatesInterfaces)
};

export default {
  state,
  actions,
  mutations,
  getters
}
