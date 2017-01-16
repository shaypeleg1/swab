import Editor from '../editor';
import Utils from '../../utils.js';
import Vue from 'vue';

import {
  mapState
} from 'vuex';

export default {
  name: 'publish-page',
  data: () => {
    return {
      "_id": "587a5e2ec8bd6a0eec87634e",
      "siteInfo": {
        "siteUrl": "MY-First-SWAB",
        "siteName": "first swab - Get API working"
      },
      "components": [
        {
          "name": "component-template1",
          "type": "mainArticlePreview",
          "props": {
            "title": "component-template - first template - get API is working",
            "subtitle": "Powered by Vue.js. get Api working",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
            "button": "LEARN MORE",
            "img_src": ""
          }
        },
        {
          "name": "component-template1",
          "type": "mainArticlePreview",
          "props": {
            "title": "component-template - first template",
            "subtitle": "Powered by Vue.js",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
            "button": "LEARN MORE",
            "img_src": ""
          }
        },
        {
          "name": "component-template1",
          "type": "mainArticlePreview",
          "props": {
            "title": "component-template - first template",
            "subtitle": "Powered by Vue.js",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
            "button": "LEARN MORE",
            "img_src": ""
          }
        },
        {
          "name": "component-template2",
          "type": "circlePreview",
          "props": {
            "title": "component-template - secound template",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                                      exercitation ullamco laboris nis",
            "img_src": ""
          }
        },
        {
          "name": "component-template2",
          "type": "shortArticlePreview",
          "props": {
            "title": "component-template - third template",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud                                                                 exercitation ullamco laboris nis",
            "button": "MORE",
            "img_src": ""
          }
        }
      ]

    }
  },
  created() { },
  methods: {
    getPublishedSite() {
      let publishedSiteId = getUrlParam('id');
      getSingleSite(publishedSiteId);
      function getSingleSite(siteId) {
        return Vue.http.get('http://localhost:3003/data/sites/'+ siteId)
          .then(res => res.json())
          .then((publishedSite) => {
            console.log('Here is the published site: ', publishedSite);
            return currSite;
          })
      }
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
    // siteInfo() {
    //   // return this.$store.state.site.siteInfo
    // },
    // components() {
    //   return this.$store.state.site.components
    // },
  },
  components: {
    Editor
  }

}
