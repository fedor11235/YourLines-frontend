export default api => ({
  getSubscribers() {
    return api.$get('/api/subscription/subscribers/')
  },
  getSubscriptions() {
    return api.$get('/api/subscription/subscriptions/')
  },
  subscribe(idUser) {
    return api.$get(`/api/subscription/subscribe/${idUser}`)
  },
  unsubscribe(idUser) {
    return api.$get(`/api/subscription/unsubscribe/${idUser}`)
  },
  check(idUser) {
    return api.$get(`/api/subscription/check/${idUser}`)
  }
})