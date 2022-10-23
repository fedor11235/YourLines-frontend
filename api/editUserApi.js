export default api => ({
    editUser(payload, id) {
      const { nickname, link, description, webSite, wishList, avatar, headerImage } = payload
      let formData = new FormData()
      if(nickname) {
        formData.append('nickname', nickname)
      }
      if(header) {
        formData.append('link', link)
      }
      if(description) {
        formData.append('description', description)
      }
      if(comments) {
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
      api.$post(`/api/user/${id}`, formData) 
    }
})
  