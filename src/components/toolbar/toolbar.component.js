import {CHANGE_NAME} from '../../modules/current-site/currentSite.module'
import {CHANGE_URL} from '../../modules/current-site/currentSite.module'

export default  {
  props:{
    toolBarData:{
      require:true,
      type:Object
    }
  },
  data(){
    return {
      
    }
  },
  methods : {
    updateName(event){
      console.log('about to update name',event.target.value)
      this.$store.commit(CHANGE_NAME, event.target.value);
    },
    updateURL(event){
      this.$store.commit(CHANGE_URL, event.target.value)
    }
  },
  components : {
    
  }
}