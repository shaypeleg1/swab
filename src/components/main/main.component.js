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
