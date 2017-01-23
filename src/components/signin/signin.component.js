import authService from '../../services/auth.service';
import {SIGN_IN, SIGN_OUT} from '../../store/modules/auth/auth.module';

export default  {
  mounted() {
    // console.log(this.$router);
    // console.log(this.$route);
  },
  data   : () => {
    return {
      user : { email: 'puki@gmail.com', password: '1234' },
      error: ""
    }
  },
  methods: {
    signin(user) {
      this.$validator.validateAll();
      if( this.errors.any() ) return;
      authService.signin(user).then(res => {
        console.log('signin in after auth service',res)
        this.$store.dispatch('singnIn', res);
      })
      // changing so after singIn router will change
      .then(res => {
        this.$router.push('/home');
      })
      .catch(err => {
        err.json().then(res => this.error = res.error);
      })
    }
  }
}


