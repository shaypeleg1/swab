import Vuex from 'vuex';
// import authModule from './modules/auth/auth.module';
// import shopModule from './modules/shop/shop.module';
// import cartModule from './modules/cart/cart.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  state:{
    count:0,
    items: [{name: "swab1", type: "shortArticlePreview", value:"test first swab comp"},
              {name: "swab2", type: "shortArticlePreview", value:"test secound swab comp"}]
  },
  strict : !isProduction
})
