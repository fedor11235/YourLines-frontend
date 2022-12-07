export default api => ({
  // action() {
  //   return api.$get(`/api/messages`)
  // },
  viewed() {
    return api.$get('/api/notifications/view')
  }
})