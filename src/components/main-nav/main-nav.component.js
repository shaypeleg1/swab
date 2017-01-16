import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../store/modules/auth/auth.module';

export default {
  name: 'main-nav',
  props : {
    editable:'',
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
      let siteId = this.currUser.sites[0];
      this.$store.dispatch('getSite', siteId);
    },
    showEditMode() {
      let enableEdit = true;
      this.$emit('changeEditMode', enableEdit);
    },
    showPreviewMode() {
      let enableEdit = false;
      this.$emit('changeEditMode', enableEdit);
    },
    showPublishMode() {
      console.log('Entering Publish Mode');
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
    currUser() {
      return this.$store.getters.currUser
    }
  }

}
