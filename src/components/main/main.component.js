import MainNav from '../main-nav';
import ToolBar from '../toolbar';
import Editor from '../editor';

import {
  mapState
} from 'vuex';


export default {
  data: () => {
    return {

    }
  },
  methods: {
  },
  created: function () {
	  let siteId = this.currUser.user.sites[0];
    console.log('this is the site Id to get: ', siteId);
    this.$store.dispatch('getSite', siteId);
	},
  computed: {
    count() {
      return this.$store.state.count
    },

    toolBarData() {
      return this.$store.state.site.toolBarData
    },

    components() {
      return this.$store.state.site.components
    },

    currUser() {
      return this.$store.state.currUser
    }

  },
  components: {
    MainNav,
    ToolBar,
    Editor
  }
}
