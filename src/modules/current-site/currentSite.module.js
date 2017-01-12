

export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'
const ADD_COMP = 'ADD_COMP';
const state = {
  toolBarData: {
    siteUrl: 'MY-First-SWAB',
    siteName: 'first swab',
  },

  const compsTemplatesInterfaces = {
    mainArticlePreview : {
        name: "component-template1",
        type: "mainArticlePreview",
        props: {
            title: "component-template - first template",
            subtitle: "Powered by Vue.js",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis", button: "LEARN MORE",
            img_src: ""
        }
    }
}
  const state = {
    components: [{
        name: "component-template1",
        type: "mainArticlePreview",
        props: {
            title: "component-template - first template",
            subtitle: "Powered by Vue.js",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis", button: "LEARN MORE",
            img_src: ""
        }
    },
    {
        name: "component-template2",
        type: "circlePreview",
        props: {
            title: "component-template - secound template",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                                      exercitation ullamco laboris nis",
            img_src: ""
        }
    },
    {
        name: "component-template2",
        type: "shortArticlePreview",
        props: {
            title: "component-template - third template",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis", button: "MORE", img_src: ""
        }
    },
    ]

const mutations = {
    [CHANGE_NAME](state, payload){
        console.log('payload',state);
        state.toolBarData.siteName = payload;
    },
    [CHANGE_URL](state, payload){
        state.toolBarData.siteUrl = payload;
    },
   [ADD_COMP] (state, { newCompData }) {
    state.components.push(newCompData)
  }
}


const actions  ={
    addComp({ commit }, type){
        let newCompData = compsTemplatesInterfaces[type];//TODO: deacp cloning
        commit(ADD_COMP, {newCompData});
    }
}


export default {

    state,
    actions,
    mutations
}

