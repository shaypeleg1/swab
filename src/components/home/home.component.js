import {
  mapMutations,
  mapGetters,
  mapState
} from 'vuex';



export default {
  name: 'home-component',
  data: () => {
    return {}
  },
  methods: {
    makeNewSite() {
      // this dispatch a post request 
      this.$store.dispatch('makeNewSite');
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
        // .then((res) => {
        //   console.log('this is the res:', res);
        //   this.$router.push('/main/' + this.$store.state.site._id)
        // });
    }
  },
  computed: {
    ...mapGetters([
      'currUser', 'sitesToPrevFunc', 'getDefaultSiteId', 'isLoggedIn', 'currSiteId'
    ]),
  },
  components: {

  },
  created() {
    this.$store.dispatch('getSites', this.currUser.user.sites);
  },
}
