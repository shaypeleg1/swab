import MainNav from '../main-nav';
import ToolBar from '../toolbar';
import Editor from '../editor';

import {
  mapState
} from 'vuex';


export default {
  data: () => {
    return {
      editable: true,
    }
  },
  methods: {
    changeEditModeFunc(isEditMode) {
      this.editable = isEditMode;
    },
  },
  created: function () {
	  // let siteId = this.currUser.user.sites[0];
    // console.log('this is the site Id to get: ', siteId);
    // this.$store.dispatch('getSite', siteId);
	},
  computed: {
    count() {
      return this.$store.state.count
    },

    siteInfo() {
      return this.$store.state.site.siteInfo
    },

    components() {
      return this.$store.state.site.components
    },

    currUser() {
      return this.$store.getters.currUser
    }
  },
  components: {
    MainNav,
    ToolBar,
    Editor
  }
}
