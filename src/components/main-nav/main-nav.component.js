import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../store/modules/auth/auth.module';

export default {
  name: 'main-nav',
  data: function(){
    return{
    }
  },
  methods : {
    signout() {
      authService.signout();
      this.$store.commit(SIGN_OUT);
      this.$router.push('/');
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
        user: 'user'
      }
    ),
  }

}
