<template lang="pug">
  .footer-page
    //- ul
      //- li {{$t('FOOTER.HELP')}}
      //- li {{$t('FOOTER.HOW')}}
      //- li {{$t('FOOTER.COMPLAINTS_POLICY')}}
      //- li {{$t('FOOTER.CONTRACT_FAN_CREATOR')}}
    //- ul
      //- li {{$t('FOOTER.ABOUT')}}
      //- li {{$t('FOOTER.COOKIE_NOTICE')}}
      //- li {{$t('FOOTER.SECURITY_CENTER')}}
      //- li {{$t('FOOTER.TERMS_SERVICE')}}
    //- ul
      //- li {{$t('FOOTER.DMCA')}}
      //- li {{$t('FOOTER.WAS_CREATED')}}
      //- li {{$t('FOOTER.PRIVACY')}}
      //- li {{$t('FOOTER.ACCEPTABLE_POLICY')}}
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.footer-page {
  display: flex;
  justify-content: space-evenly;
  height: 242px;
  width: 100vw;
  padding: 35px 0 50px;
  color: #8a96a3;
  background: #fdfdfd;
  li {
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
}
</style>