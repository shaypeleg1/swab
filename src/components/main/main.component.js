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
  computed: {
    count() {
      return this.$store.state.count
    },

    siteInfo() {
      return this.$store.state.site.siteInfo
    },

    components() {
      return this.$store.state.site.components
    }

  },
  components: {
    MainNav,
    ToolBar,
    Editor
  }
}
