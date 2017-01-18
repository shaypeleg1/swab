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
      console.log('make new site');
      // this dispatch a post request 
      this.$store.dispatch('makeNewSite');
    },
    signOut() {
      console.log(' home.component.html -> home.component:signOut =>> auth.module:signOut');
      this.$store.dispatch('signOut') 
        .then(res => {
          this.$router.push('/')
        })
    },
    createNewSite() {
      console.log('(01)make new site, userId:', this.$store.state.defualtSiteId);

      this.$store.dispatch('createNewSite', {
          siteId: this.$store.state.defualtSiteId,
          userId: this.$store.state.currUser.user.user._id
        })
        .then(res => {
          console.log('this is the res:', res);
          this.$router.push('/main/' + this.$store.state.site._id)
        });
    }
  },
  computed: {
    ...mapGetters([
      'currUser', 'sitesToPrevFunc', 'getDefaultSiteId', 'isLoggedIn'
    ]),
  },
  watch: {

  },
  components: {

  },
  created() {
    this.$store.dispatch('getSites', this.currUser.user.sites);
  },
}
