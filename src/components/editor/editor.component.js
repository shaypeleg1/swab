import ComponentTemplateList from '../component-template-list';

export default {
  props: {
    components: {
      require: true,
      type: Array
    }

  },
  created() {},
  methods: {
    saveSite() {
      console.log('post');
      this.$store.dispatch('saveSite',);
    },
  },
  computed: {

  },
  components: {
    ComponentTemplateList
  }

}
