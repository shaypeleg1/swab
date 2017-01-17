import {mapMutations,mapGetters} from 'vuex';


export default {
  name: 'home-component',
  data: () => {
    return {}
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'currUser','sitesToPrev']),

  },
  components: {

  },
  created(){
    console.log('this is currUser',this.currUser.user.sites);
    this.$store.dispatch('getSites',this.currUser.user.sites);
  },
}
