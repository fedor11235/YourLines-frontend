export default api => ({
    userGet() {
      return api.$get('/api/user')
    },
    editUser(payload, id) {
      const { nickname, link, description, webSite, wishList, avatar, headerImage } = payload
      let formData = new FormData()
      if(nickname) {
        formData.append('nickname', nickname)
      }
      if(link) {
        formData.append('link', link)
      }
      if(description) {
        formData.append('description', description)
      }
      if(webSite) {
        formData.append('webSite', webSite)
      }
      if(wishList) {
        formData.append('wishList', wishList)
      }
      if(avatar) {
        formData.append('avatar', avatar)
      }
      if(headerImage) {
        formData.append('headerImage', headerImage)
      }
      return api.$put(`/api/user/${id}`, formData) 
    },
    getAllUsers() {
      return api.$get('/api/user/all')
    },
    getUsersByLink(link) {
      return api.$get(`/api/user/link/${link}`)
    }
})
  