import authService from '../../services/auth.service';
import {
  SIGN_IN
} from '../../store/modules/auth/auth.module';
export default {
   name    : 'signup',
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
      this.$validator.validateAll();
      if (this.errors.any()) return;
      authService.signup(newUser)
        .then(res => {
          this.$store.dispatch('singnIn', res);
          location.reload();
        }).catch(err => {this.error = 'user already exists'});
    },
    switchToSignIn() {
      this.$emit('switchModal');
    }
  }
}
