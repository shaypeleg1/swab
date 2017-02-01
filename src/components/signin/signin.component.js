import authService from '../../services/auth.service';
import {SIGN_IN, SIGN_OUT} from '../../store/modules/auth/auth.module';

export default  {
  name    : 'signin',
  mounted() {
  },
  data   : () => {
    return {
      user : { email: 'puki@gmail.com', password: '123456' },
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
        // this.$router.push('/home');    
           location.reload();
      })
      .catch(err => {
        err.json().then(res => this.error = res.error);
      })
    },
    switchToSignUp() {
      this.$emit('switchModal');
    }
  }
}


