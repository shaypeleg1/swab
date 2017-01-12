export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'
const ADD_COMP = 'ADD_COMP';
const DELETE_COMP = 'DELETE_COMP';

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
      state.toolBarData.siteName = payload;
    },
    [CHANGE_URL](state, payload) {
      state.toolBarData.siteUrl = payload;
    },
    [ADD_COMP](state, {
      newCompData,indexToInsert
    }) {
      state.components.splice(indexToInsert,0, newCompData);
    },
    [DELETE_COMP](state, {
      type
    }) {
      console.log('active delete mutation');
      console.log('delete mutation on comp idx: ',type);
      state.components.splice(Number(type),1);
    }
  }


  const actions = {
    addComp({commit}, compData) {
      console.log(compData)
      let newCompData = (JSON.parse(JSON.stringify(compsTemplatesInterfaces[compData.type]))); // Deep cloning
      let indexToInsert = compData.indexToInsert;
      commit(ADD_COMP, {
        newCompData,indexToInsert
      });
    },
    deleteComp({commit}, type) {
      commit(DELETE_COMP, {
        type
      });
    }

  }

//  this.$store.dispatch('deleteComp', type);
  export default {

    state,
    actions,
    mutations
  }

