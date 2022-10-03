export default api => ({
    loginUser(payload) {
      let formData = new FormData()
      formData.append('login', payload.login)
      formData.append('password', payload.password)
      return api.$post('/auth/login', formData)
    },
    registryUser(payload) {
      let formData = new FormData()
      formData.append('login', payload.login)
      formData.append('password', payload.password)
      return api.$post('/auth/registry', formData)
    }
  })
  