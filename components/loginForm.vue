<template lang="pug">
.login-form(action='#' method='method')
  .form-groups
    .title Authorization
    .form-group
      input.form-control(type='email', v-model="email" name='email' placeholder='Email' autofocus=true)
    .form-group
      input.form-control(type='password', v-model="email" name='{:password}' placeholder='Password')
    button.button.button-blue(type='submit' @click="handlerLogin") Log-in
    button.button.button-blue(type='submit' @click="handlerRegistry") Registry
    button.button.outlined(type='submit') Login with google
    button.button.outlined(type='submit') Login with twitter
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handlerLogin() {
      // const emailValid = this.emailVerification()
      // if(emailValid) {
      //   const response = await this.$aythService.userLogin({login: this.email, password: this.password})
      //   if (response) {
      //     this.$nuxt.$router.replace({ path: '/main '})
      //     return
      //   } else {
      //     alert('This user does not exist')
      //   }
      //   return
      // }
      // alert ('You entered an invalid email')
    },
    async handlerRegistry() {
      // const emailValid = this.emailVerification()
      // if(emailValid) {
      //   const response = await this.$aythService.userRegistry({login: this.email, password: this.password})
      //   console.log(response, 'response')
      //   if (response) {
      //     this.$nuxt.$router.replace({ path: '/main '})
      //     return
      //   } else {
      //     alert('The user is already registered for this email')
      //   }
      //   return
      // }
      // alert ('You entered an invalid email')
    },
    emailVerification() {
      if(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(this.email)) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-groups {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .title {
      text-align: center;
      margin-bottom: 8px;
    }
    .form-group {
      margin-bottom: 8px;
      input {
        border-radius: 4px;
        border: 1px solid grey;
        padding: 14px 16px;
        width: 344px;
        height: 48px;
        caret-color: violet;
        &:focus {
          border-color: violet;
        }
      }
    }
  }
  button {
    margin-bottom: 8px;
  }
}

</style>