import Vuex from 'vuex';
import CurrentSiteModule from './modules/current-site/currentSite.module.js'
// import authModule from './modules/auth/auth.module';
// import shopModule from './modules/shop/shop.module';
// import cartModule from './modules/cart/cart.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  state:{
    count:0,

    // items: [{name: "swab1", type: "mainArticlePreview", value:"test first swab comp"},
    //         {name: "swab2", type: "circlePreview", value:"test secound swab comp"},
    //         {name: "swab2", type: "shortArticlePreview", value:"test third swab comp"}]

  },
  modules:{
    site:CurrentSiteModule
  },
  strict : !isProduction
})
