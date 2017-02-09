import Editor from '../editor';
import Utils from '../../utils.js';


import {
  mapState
} from 'vuex';

export default {
  name: 'publish-page',
  data: () => {
    return {
    }
  },

  created() {
    let publishedSiteId = this.$route.params.id;
    this.$store.dispatch('getSite', publishedSiteId);
  },
  methods: {

  },
  computed: {
    siteInfo() {
      return this.$store.state.site.siteInfo
    },
    components() {
      return this.$store.state.site.components
    },
  },
  components: {
    Editor
  }

}
