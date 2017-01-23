import authService from '../../services/auth.service';
import {
  SIGN_IN
} from '../../store/modules/auth/auth.module';
export default {
  data: () => {
    return {
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        sites: []
      },
      error: ""
    }
  },
  methods: {
    signup(newUser) {
      console.log('user in signup in signup components', newUser)
      this.$validator.validateAll();
      if (this.errors.any()) return;

      authService.signup(newUser)
        .then(res => {
          console.log('in sign up', res);
          // this.$store.dispatch(signin), res;
          this.$store.dispatch('singnIn', res);

          this.$router.push('/home');
        }).catch(err => {this.error = 'user already exists'});
    }
  }
}
