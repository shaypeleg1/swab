import ComponentTemplateList from '../component-template-list';

export default {
  name: 'preview-page',
  props: {
    components: {
      require: true,
      type: Array
    }
  },
  created() {},
  methods: {
  },
  computed: {

  },
  components: {
    ComponentTemplateList
  }

}
