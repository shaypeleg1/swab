export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'
const ADD_COMP = 'ADD_COMP';

const compsTemplatesInterfaces = {
  mainArticlePreview: {
    name: "component-template1",
    type: "mainArticlePreview",
    props: {
      title: "component-template - first template",
      subtitle: "Powered by Vue.js",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
      button: "LEARN MORE",
      img_src: ""
    }
  }
}
const state = {
  toolBarData: {
    siteUrl: 'MY-First-SWAB',
    siteName: 'first swab',
  },
  components: [{
    name: "component-template1",
    type: "mainArticlePreview",
    props: {
      title: "component-template - first template",
      subtitle: "Powered by Vue.js",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
      button: "LEARN MORE",
      img_src: ""
    }
  }, {
    name: "component-template2",
    type: "circlePreview",
    props: {
      title: "component-template - secound template",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                                      exercitation ullamco laboris nis",
      img_src: ""
    }
  }, {
    name: "component-template2",
    type: "shortArticlePreview",
    props: {
      title: "component-template - third template",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
      button: "MORE",
      img_src: ""
    }
  }, ]
}

const mutations = {
  [CHANGE_NAME](state, payload) {
    console.log('payload', state);
    state.toolBarData.siteName = payload.name;
  },
  [CHANGE_URL](state, payload) {
    state.toolBarData.siteUrl = payload.url;
  },
  [ADD_COMP](state, {
    newCompData,indexToInsert
  }) {
    state.components.splice(indexToInsert,0,newCompData)
  }
}


const actions = {
  // recive data from toolbar in the html
  updateName({
    commit
  }, name) {
    console.log('updating url from currentSite', name)
    commit(CHANGE_NAME, {
      name
    })
  },
  // recive data from toolbar in the html  
  updateUrl({commit}, url) {
    commit(CHANGE_URL, {
      url
    })
  },
  // recive data from components-template-list
  addComp({
    commit
  }, compData) {
      console.log('comp data',compData);
    let newCompData = (JSON.parse(JSON.stringify(compsTemplatesInterfaces[compData.type]))); // Deep cloning
    let indexToInsert = compData.indexToInsert;
    commit(ADD_COMP, {
      newCompData,indexToInsert
    });
  }
}


export default {

  state,
  actions,
  mutations
}
