<template lang="pug">
  .login-form(action='#' method='method')
    .form-group
      label(for='email') Email
      input.form-control(type='email', name='email' placeholder='Email' autofocus=true)
    .form-group
      label(for='password') Password
      input.form-control(type='password', name='{:password}')
    button.btn.btn-primary(type='submit') Log-in
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>