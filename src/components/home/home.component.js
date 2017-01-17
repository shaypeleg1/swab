import {mapMutations,mapGetters} from 'vuex';


export default {
  name: 'home-component',
  data: () => {
    return {}
  },
  methods: {
    makeNewSite(){
      console.log('make new site');
      // this dispatch a post request 
      this.$store.dispatch('makeNewSite');
    }
  },
  computed: {
    ...mapGetters([
      'currUser','sitesToPrev','getDefaultSiteId']),
  },
  components: {

  },
  created(){
    console.log('this is currUser',this.currUser.user.sites);
    this.$store.dispatch('getSites',this.currUser.user.sites);
  },
}
