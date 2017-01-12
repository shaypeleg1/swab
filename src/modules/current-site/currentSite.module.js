
export const CHANGE_NAME = 'current-site/CHANGE_NAME'
export const CHANGE_URL = 'current-site/CHANGE_URL'

const state = {
  toolBarData: {
    siteUrl: 'MY-First-SWAB',
    siteName: 'first swab',
  },

  items: [{
    name: "swab1",
    type: "mainArticlePreview",
    props: {
      title: "test first swab comp",
      subtitle: "asjf",
      content: "bla bal",
      button: "Learn more",
      img_src: ""
    }
  }, {
    name: "swab2",
    type: "circlePreview",
    value: "test secound swab comp"
  }, {
    name: "swab2",
    type: "shortArticlePreview",
    value: "test third swab comp"
  }]
}

const mutations = {
    [CHANGE_NAME](state, payload){
        console.log('payload',state);
        state.toolBarData.siteName = payload;
    },
    [CHANGE_URL](state, payload){
        state.toolBarData.siteUrl = payload;
    }
}

export default {
  state,
  mutations
}
