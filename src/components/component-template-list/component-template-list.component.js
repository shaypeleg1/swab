import MainArticlePreview from '../component-template/main-article-preview';
import CirclePreview from '../component-template/circle-preview';
import ShortArticlePreview from '../component-template/short-article-preview';

export default {
  props: {
    editable: '',
    components: {
      require: true,
      type:Array
    }
  },
  created () {

  },
  methods   : {
    addSingleComp(event){
      let indexToInsert = +event.target.value + 1;
      console.log('index to insert',indexToInsert);
      let type = 'mainArticlePreview';
      this.$store.dispatch('addComp', {type,indexToInsert});

    }
  },
  computed  : {

  },
  components: {
    MainArticlePreview,
    CirclePreview,
    ShortArticlePreview
  }

}

