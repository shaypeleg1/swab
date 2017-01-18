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
      this.$store.dispatch('signOut') //sends to site.service and send to auth.module
        .then(res => {this.$router.push('/')})
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
    //console.log('this is currUser', this.currUser.user.sites);
    this.$store.dispatch('getSites', this.currUser.user.sites);
  },
}
