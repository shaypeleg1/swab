import Vuex from 'vuex';
// import authModule from './modules/auth/auth.module';
// import shopModule from './modules/shop/shop.module';
// import cartModule from './modules/cart/cart.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  state:{
    count:0,

    items: [{name: "swab1", type: "mainArticlePreview", props: {title:"SWAB First template", subtitle:"A free and fully responsive site template", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", button:"LEARN MORE", img_src:"../../assets/images/pic10.jpg"}},
            {name: "swab2", type: "circlePreview", value:"test secound swab comp"},
            {name: "swab2", type: "shortArticlePreview", value:"test third swab comp"}]

  },
  strict : !isProduction
})
