import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../store/modules/auth/auth.module';

export default {
  name: 'main-nav',
  props : {
    editable:'',
    siteInfo: {
    require: true,
    type: Object
    }
  },
  data: function () {
    return{
    }
  },
  created() {
    // get site from server from URL id param
    let EditSiteId = this.$route.params.id;
    this.$store.dispatch('getSite', EditSiteId);
  },
  methods : {
    signout() {
      authService.signout();
      this.$store.commit(SIGN_OUT);
      this.$router.push('/');
    },
    getSingleSite() {
      let EditSiteId = this.$route.params.id;
      this.$store.dispatch('getSite', EditSiteId);
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
       this.$router.push({ name: 'published', params: { id: this.siteId }})
    },
    ...mapMutations({

    })
  },
  computed: {
    ...mapGetters([
      // 'currSiteId',
      // 'cart'
    ]),
    siteId() {
      return this.$store.state.site._id
    },
    currUser() {
      return this.$store.getters.currUser
    }
  }

}
