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

    toolBarData(){return this.$store.state.site.toolBarData},

    components(){ return this.$store.state.site.components}

  },
  components : {
    MainNav,
    ToolBar,
    Editor
  }
}