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
        .then(res => {
          this.$router.push('/')
        })
    },
    createNewSite() {
      console.log('(01)make new site, userId:', this.$store.state.currUser.user.user._id);
      // {path:`main/${getDefaultSiteId}`}" this is where the new site will be opened
      // dispatch to sitePrev.module, sends template site id
      let defaultSiteId = "587e2fb49f8d447e4e1cbb55";
      this.$store.dispatch('createNewSite', {
          siteId: defaultSiteId,
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
    // console.log('this is currUser', this.currUser.user.sites);
    this.$store.dispatch('getSites', this.currUser.user.sites);
  },
}
