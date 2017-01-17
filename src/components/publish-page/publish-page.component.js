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

  },
  methods: {
    getPublishedSite() {
      let publishedSiteId = getUrlParam('id');
      console.log('here is the id to get: ', publishedSiteId);
      this.$store.dispatch('getSite', publishedSiteId);
       function getUrlParam(param) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(
          /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
          function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
          }
        );
        if (param) {
          return vars[param] ? vars[param] : null;
        }
        return vars;
      }
    }
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
