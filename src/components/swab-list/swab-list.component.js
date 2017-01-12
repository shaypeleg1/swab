import MainArticlePreview from '../swab/main-article-preview';
import CirclePreview from '../swab/circle-preview';
import ShortArticlePreview from '../swab/short-article-preview';

export default {
  props: {
    items: {
      require: true,
      type:Array
    }
  },
  created () {

  },
  methods   : {

  },
  computed  : {

  },
  components: {
    MainArticlePreview,
    CirclePreview,
    ShortArticlePreview
  }

}

