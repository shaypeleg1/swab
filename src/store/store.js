import Vuex from 'vuex';
import CurrentSiteModule from './modules/current-site/currentSite.module.js'
import authModule from './modules/auth/auth.module';

import sitesPrevModule from './modules/sites-prev/sitesPrev.module'

// import shopModule from '.store/modules/shop/shop.module';
// import cartModule from '.store/modules/cart/cart.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  state:{
    count:0,
    defualtSiteId: "587e0e2e9f8d447e4e1cbb54"
    // components: [{name: "component-template1", type: "mainArticlePreview", value:"test first component-template comp"},
    //         {name: "component-template2", type: "circlePreview", value:"test secound component-template comp"},
    //         {name: "component-template2", type: "shortArticlePreview", value:"test third component-template comp"}]

  },
  modules:{
    site:CurrentSiteModule,
    currUser : authModule,
    sitesPrev: sitesPrevModule
  },
  strict : !isProduction
})
