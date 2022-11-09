export default api => ({
  commentAdd(payload) {
    return api.$post('/api/comments', payload)
  }
})
