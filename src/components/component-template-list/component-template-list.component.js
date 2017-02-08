import NavSections from '../nav-sections/nav-sections';
import MainArticlePreview from '../component-template/main-article-preview';
import CirclePreview from '../component-template/circle-preview';
import ShortArticlePreview from '../component-template/short-article-preview';
import { mapGetters } from 'vuex'

export default {
  props: {
    editable: '',
    components: {
      require: true,
      type:Array
    }
  },
  data: () => {
    return {
      openedDropdownIndex: -1,
      isDropOpen: false
    }
  },
  created () {

  },
  methods   : {
    toggleDropDown(event, index) {
    if (this.openedDropdownIndex === index) this.openedDropdownIndex = -1; 
    else  this.openedDropdownIndex = index;
    },
    hideDropdown() {
      this.openedDropdownIndex = -1;
    },
    addSingleComp($event){ // look at the toggleDropDown function you can use "index" also here insted of event.value
      let compType = $event.target.outerText;
      let indexToInsert = +event.target.value + 1;
      this.$store.dispatch('addComp', {compType,indexToInsert});
    }
  },
  computed  : {
    ...mapGetters([
          'templatesList','currSiteName'
        ])
      
  },
  components: {
    NavSections,
    MainArticlePreview,
    CirclePreview,
    ShortArticlePreview
  }

}

