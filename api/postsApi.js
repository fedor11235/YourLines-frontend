export default api => ({
  postsGetAll() {
    return api.$get('/api/posts')
  },
  postsGetUserAll(idUser) {
    return api.$get(`/api/posts/user/${idUser}`)
  },
  postAdd(payload, idUser) {
    const { image, header, description, comments } = payload
    let formData = new FormData()
    if(image) {
      formData.append('image', image)
    }
    if(header) {
      formData.append('header', header)
    }
    if(description) {
      formData.append('description', description)
    }
    if(comments) {
      formData.append('comments', comments)
    }
    api.$post(`/api/posts/add/${idUser}`, formData)
  },
  postEdit(payload) {
    const { id, image, header, description, comments } = payload
    let formData = new FormData()
    if(image) {
      formData.append('image', image)
    }
    if(header) {
      formData.append('header', header)
    }
    if(description) {
      formData.append('description', description)
    }
    if(comments) {
      formData.append('comments', comments)
    }
    api.$patch(`/api/posts/${id}`, formData)
  },
  postDelete(id) {
    api.$delete(`/api/posts/${id}`)
  },
  postLike(idPost) {
    api.$get(`/api/posts/like/${idPost}`)
  }
})
  