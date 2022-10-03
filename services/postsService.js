export default ctx => ({
    async userLogin() {
      let response
      try {
        response = ctx.$postsApi.postsGetAll()
        window.localStorage.setItem('posts', response)
        return response
      } catch (e) {
        console.error('posts info unavailable', e)
      }
    },
    async postAdd(payload) {
        let response
        try {
          ctx.$postsApi.postAdd(payload)
          // TODO add store
          // window.localStorage.setItem('posts', response)
          return response
        } catch (e) {
          console.error('posts info unavailable', e)
        }
      },
    async postEdit(payload) {
        let response
        try {
          ctx.$postsApi.postEdit(payload)
          //TODO add store
          //window.localStorage.setItem('posts', response)
          return response
        } catch (e) {
          console.error('posts info unavailable', e)
        }
      },
    async postDelete(id) {
        let response
        try {
          ctx.$postsApi.postEdit(id)
          //TODO add store
          //window.localStorage.setItem('posts', response)
          return response
        } catch (e) {
          console.error('posts info unavailable', e)
        }
      }
  })
  
  