import Vuex from 'vuex';
import CurrentSiteModule from './modules/current-site/currentSite.module.js'
import authModule from './modules/auth/auth.module';

import sitesPrevModule from './modules/sites-prev/sitesPrev.module'

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  state:{
    count:0,
    // Thats the id on mLab
    defualtSiteId: "588090e2734d1d5b7d47b0ff"
    // thats the id on local
    // defualtSiteId: "58878037a54c6f0190ea5e29"


  },
  modules:{
    site: CurrentSiteModule,
    currUser : authModule,
    sitesPrev: sitesPrevModule
  },
  strict : !isProduction
})
