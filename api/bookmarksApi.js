export default api => ({
  bookmarkAdd(idPost, idUser) {
    return api.$post(`/api/bookmark/${idPost}/`, {idUser: idUser})
  },
  bookmarkGetAll() {
    return api.$get('/api/bookmark')
  }
})
  