import {CHANGE_NAME} from '../../store/modules/current-site/currentSite.module'
import {CHANGE_URL} from '../../store/modules/current-site/currentSite.module'

export default  {
  props:{
    siteInfo:{
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
      this.$store.dispatch('updateName', event.target.value);
    },
    updateURL(event){
      this.$store.dispatch('updateUrl', event.target.value)
    }
  },
  components : {
    
  }
}