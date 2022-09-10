<template lang="pug">
  .login-form(action='#' method='method')
    .form-groups
      .title Authorization
      .form-group
        input.form-control(type='email', name='email' placeholder='Email' autofocus=true)
      .form-group
        input.form-control(type='password', name='{:password}' placeholder='Password')
      button.button.button-blue(type='submit') Log-in
      button.button.outlined(type='submit') Login with google
      button.button.outlined(type='submit') Login with twitter
</template>

<script>
export default {
  
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