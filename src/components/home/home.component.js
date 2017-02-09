import signin from '../signin';
import signup from '../signup';

import {
  mapMutations,
  mapGetters,
  mapState
} from 'vuex';



export default {
  name: 'home-component',
  data: () => {
    return {
      showModalData: {
        type: '',
        isActive: false,
      },
      createNewLoad: false,
      // showModalType : '',
    }
  },
  watch: {
    userSites: function () {
      this.$store.dispatch('getSites', this.$store.getters.currUser.sites);
    }
  },
  methods: {
    showModal(event, type) {
      if (type === '') {
        this.showModalData.isActive = false;
      } else {
        this.showModalData.isActive = true;
      }
      this.showModalData.type = type;

    },

    makeNewSite() {
      this.$store.dispatch('makeNewSite');
    },
    deleteSite(event, siteId) {
      let that = this; // ask how to avoid this
      swal({
        title: "Are you sure?",
        text: "Type DELETE in the text box ,You will not be able to recover this web site",
        type: "input",
        showCancelButton: true,
        confirmButtonColor: "#EB6429",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        inputPlaceholder: "Write DELETE here",
      },
        function (inputValue) {
          if (inputValue === false) return false;

          if (inputValue !== "DELETE") {
            swal.showInputError("You need to write DELETE in the text box");
            return false
          }
          that.$store.dispatch('deleteSite', siteId)
            .then(res => {
              swal("Deleted!", "Your site has been deleted.", "success");
            }).catch(function (error) {
              swal("Error", "There was a problam deleting the site", "error");
            });
        },
      );

    },
    signIn() {
      this.$router.push({ name: 'signin' });
    },
    signUp() {
      this.$router.push({ name: 'signup' });
    },
    signOut() {
      this.$store.dispatch('signOut')
        .then(res => {
          this.$router.push('/')
          this.$root.$refs.toastr.Add({
            title: "Logged Out",
            msg: "",
            clickClose: false,
            timeout: 3000,
            position: "toast-top-right",
            type: "error"
          });
        })
    },
    createNewSite() {
      if (this.isLoggedIn) {
        this.createNewLoad = true;
        this.$store.dispatch('createNewSite', {
          siteId: this.$store.state.defualtSiteId,
          userId: this.$store.state.currUser.user._id
        })
          .then(res => {
            let that = this;
            setTimeout(function () { that.createNewLoad = false; }, 0);

          });
      } else {
        this.showModal('', 'signIn');
      }
    }
  },
  computed: {
    ...mapGetters([
      'currUser', 'sitesToPrevFunc', 'getDefaultSiteId', 'isLoggedIn', 'currSiteId'
    ]),
    userFirstName() {
      return this.$store.getters.currUser.firstName
    },
    currSiteId() {
      return this.$store.getters.currSiteId
    },
    userSites() {
      return this.$store.getters.currUser.sites
    },
  },

  beforeCreate() {
    this.$store.dispatch('checkUserLogged');
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch('getSites', this.currUser.sites);
    }
  },
  components: {

    signin,
    signup,
  },
}
