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
      this.$store.commit(CHANGE_NAME , event.target.value)
    },
    updateURL(event){
      this.$store.commit(CHANGE_URL , event.target.value)
    },
    saveSite() {
      this.$store.dispatch('saveSite')
        .then(res => {
          this.$root.$refs.toastr.Add({
          title: "SWAB Saved",
          msg: "",
          clickClose: false,
          timeout: 3000,
          position: "toast-top-right",
          type: "success"
        });
      })
    },
  },

  components : {
    
  }
}