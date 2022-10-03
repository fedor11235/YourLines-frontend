export default api => ({
    postsGetAll() {
      return api.$get('/posts', formData)
    },
    postAdd(payload) {
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
      api.$post('/posts/add', formData)
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
      api.$patch(`/posts/${id}`, formData)
    },
    postDelete(id) {
      api.$delete(`/posts/${id}`)
    }
  })
  