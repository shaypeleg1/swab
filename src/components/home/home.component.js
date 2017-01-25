import signin from '../signin';
import signup from '../signup';

import {
  mapMutations,
  mapGetters,
  mapState
} from 'vuex';



export default {
  name: 'home-component',
  data: () => {
    return {
      show: {
        signIn: false,
        signUp: false,
      }
    }
  },
  watch: {
    userSites: function () {
      this.$store.dispatch('getSites', this.$store.getters.currUser.sites);
    }
  },
  methods: {
    showModal(event, action) {
      this.show[action] = !this.show[action];
    },
    makeNewSite() {
      this.$store.dispatch('makeNewSite');
    },
    signIn() {
      this.$router.push({ name: 'signin' });
    },
    signUp() {
      this.$router.push({ name: 'signup' });
    },
    signOut() {
      this.$store.dispatch('signOut')
        .then(res => {
          this.$router.push('/')
          this.$root.$refs.toastr.Add({
          title: "Logged Out", // Toast Title
          msg: "", // Message
          clickClose: false, // Click Close Disable
          timeout: 3000, // Remember defaultTimeout is 5 sec..
          position: "toast-top-right", // Toast Position.
          type: "error" // Toast type
          });
        })
    },
    createNewSite() {
      this.$store.dispatch('createNewSite', {
        siteId: this.$store.state.defualtSiteId,
        userId: this.$store.state.currUser.user._id
      })
    }
  },
  computed: {
    ...mapGetters([
      'currUser', 'sitesToPrevFunc', 'getDefaultSiteId', 'isLoggedIn', 'currSiteId'
    ]),
    userFirstName() {
      return this.$store.getters.currUser.firstName
    },
    currSiteId() {
      return this.$store.getters.currSiteId
    },
    userSites() {
      return this.$store.getters.currUser.sites
    },
  },

  beforeCreate() {
    this.$store.dispatch('checkUserLogged');
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch('getSites', this.currUser.sites);
    }
  },
  components: {

    signin,
    signup,
  },
}
