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
    }
  })
  