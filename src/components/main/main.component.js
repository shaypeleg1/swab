import MainNav from '../main-nav';
import ToolBar from '../toolbar';
import Editor from '../editor';

import {mapState} from 'vuex';


export default  {
  data: () => {
    return {
      
    }
  },
  methods : {

  },
  computed:{
    count(){ return this.$store.state.count},
    items(){ return this.$store.state.site.items}
  },
  components : {
    MainNav,
    ToolBar,
    Editor
  }
}