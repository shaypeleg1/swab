import MainNav from '../main-nav';
import ToolBar from '../toolbar';
import Editor from '../editor';


export default  {
  data: () => {
    return {
      items: [{name: "swab1", type: "txt", value:"test first swab comp"},
              {name: "swab2", type: "txt", value:"test secound swab comp"}]
    }
  },
  methods : {

  },
  components : {
    MainNav,
    ToolBar,
    Editor
  }
}