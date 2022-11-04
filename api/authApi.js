export default api => ({
    userLogin(payload) {
      const { login, password } = payload
      let formData = new FormData()
      formData.append('login', login)
      formData.append('password', password)
      return api.$post('/api/auth/login', formData)
    },
    userRegistry(payload) {
      const { login, password } = payload
      let formData = new FormData()
      formData.append('login', login)
      formData.append('password', password)
      return api.$post('/api/auth/registry', formData)
    },
    userRefreshToken() {
      return api.$get('/api/auth/refresh')
    },
    userLogout() {
      return api.$delete('/api/auth/logout')
    },

    //Authorization through social networks
    userLoginGoogle() {
      return api.$get('/api/auth/google')
    },
    userLoginTwitter() {
      return api.$get('/api/auth/twitter')
    },
    userLoginInstagram() {
      return api.$get('/api/auth/instagram')
    }
  })
  