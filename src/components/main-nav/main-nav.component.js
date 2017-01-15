import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../store/modules/auth/auth.module';

export default {
  name: 'main-nav',
  props : {
    currUser: {
      require: false,
      type:Object
    }
  },
  data: function () {
    return{
    }
  },
  
  methods : {
    signout() {
      authService.signout();
      this.$store.commit(SIGN_OUT);
      this.$router.push('/');
    },
    getSingleSite() {
      let siteId = this.currUser.user.sites[0];
      console.log('this is the site Id to get: ', siteId);
      this.$store.dispatch('getSite', siteId);
    },
    ...mapMutations({

    })
  },
  computed: {
    ...mapGetters([
      // 'cartLength',
      // 'cart'
    ]),
    ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        // currUser: 'currUser'
      }
    ),
  }

}
