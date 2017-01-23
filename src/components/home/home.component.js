import {
  mapMutations,
  mapGetters,
  mapState
} from 'vuex';



export default {
  name: 'home-component',
  data: () => {
    return {
    }
  },
  methods: {
    makeNewSite() {
      this.$store.dispatch('makeNewSite');
    },
    signIn() {
        this.$router.push({ name: 'signin'});
    },
    signUp() {
        this.$router.push({ name: 'signup'});
    },
    signOut() {
      this.$store.dispatch('signOut')
        .then(res => {
          this.$router.push('/')
        })
    },
    createNewSite() {
      this.$store.dispatch('createNewSite', {
        siteId: this.$store.state.defualtSiteId,
        userId: this.$store.state.currUser.user.user._id
      })
    }
  },
  computed: {
    ...mapGetters([
      'currUser', 'sitesToPrevFunc', 'getDefaultSiteId', 'isLoggedIn', 'currSiteId'
    ]),
    userFirstName() {
      return this.$store.getters.currUser.firstName
    }
  },
  components: {

  },
  created() {
      this.$store.dispatch('checkUserLogged',)
      console.log('isLoggedIn', this.isLoggedIn);      
    if (this.isLoggedIn) {
      this.$store.dispatch('getSites', this.currUser.sites);
    } else {
    }
  },
}
