export const ADD_TO_CART = 'cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
export const CHECKOUT = 'cart/CHECKOUT';
export const CHECKOUT_SUCCESS = 'cart/CHECKOUT_SUCCESS';
export const CHECKOUT_ERROR = 'cart/CHECKOUT_ERROR';

import shopService from '../../services/shop.service';

const state = {
  components  : [],
  loading: false,
  error  : null
}

const mutations = {
  [ADD_TO_CART]( state, component ) {
    let componentExists = state.components.indexOf(component) > -1;
    if( !componentExists ) {
      state.components.push(component);
    }
  },
  [REMOVE_FROM_CART]( state, component ) {
    component.quantity = 0;
    state.components.splice(state.components.indexOf(component), 1);
  },
  [CHECKOUT]( state ) {
    state.loading = true;
  },
  [CHECKOUT_SUCCESS]( state ) {
    state.components = [];
    state.loading = false;
  },
  [CHECKOUT_ERROR]( state, error ) {
    state.error = error;
    state.loading = false;
  }
}

const actions = {
  checkout( { commit } ) {
    commit(CHECKOUT);
    shopService.checkout().then(_ => {
      commit(CHECKOUT_SUCCESS);
      swal({
        title: "Busted!!!!",
        type : "success",
        text : "I took all your money",
      });
    }).catch(err => {
      commit(CHECKOUT_ERROR, err);
    });
  },
};

const getters = {
  components          : state => state.components,
  checkoutPending: state => state.loading,
  error          : state => state.error,
  cart( state ) {
    return state.components.filter(i => i.quantity);
  },
  cartTotal( _, getters ) {
    return getters.cart.reduce(( acc, component ) => {
      return acc + (parseInt(component.quantity) * component.price);
    }, 0);
  },
  cartLength( _, getters ) {
    return getters.cart.length;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}