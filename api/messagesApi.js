export default api => ({
  getMessages() {
    return api.$get(`/api/messages`)
  }
})