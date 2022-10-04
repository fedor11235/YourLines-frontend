import { mapGetters, mapState } from 'vuex'
import Vue from 'vue'

export default {
  data() {
    return {
      isPasted: false
    }
  },
  computed: {
    ...mapState({
      userImage: state => state.userImage,
      visibleBulkPreviewsPlaceholders: state => state.visibleBulkPreviewsPlaceholders,
      showSinglePreviewPlaceholder: state => state.showSinglePreviewPlaceholder
    })
  },
  watch: {
    visibleBulkPreviewsPlaceholders(val) {
      if (!val) {
        setTimeout(() => {
          this.isPasted = false
        }, 1500)
      }
    },
    showSinglePreviewPlaceholder(val) {
      if (!val) {
        setTimeout(() => {
          this.isPasted = false
        }, 1500)
      }
    }
  },
  methods: {
    browseFile() {
      if (this.visibleBulkPreviewsPlaceholders || this.showSinglePreviewPlaceholder) return
      this.$refs.fileInput.click()
    },
    checkSizeCompatibleMany(files) {
      let compatible = true
      for (const file of files) {
        const sizeInMb = (file.size / (1024 * 1024)).toFixed(2)
        if (sizeInMb > 5) {
          compatible = false
          return compatible
        }
      }
      return compatible
    },
    checkSizeCompatibleOne(file) {
      const sizeInMb = (file.size / (1024 * 1024)).toFixed(2)
      if (sizeInMb > 5) {
        return false
      }
      return true
    },
    clearFileInput() {
      if (!this.$refs.fileInput) return
      try {
        this.$refs.fileInput.value = ''
        if (this.$refs.fileInput.value) {
          this.$refs.fileInput.type = 'text'
          this.$refs.fileInput.type = 'file'
        }
      } catch (e) {
        console.error(e)
      }
    },
    getFilteredFiles(files) {
      const filteredFiles = []
      for (const file of files) {
        if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
          filteredFiles.push(file)
        }
      }
      return filteredFiles
    },
    getFilteredFile(file) {
      if (/\.(jpg|jpeg|png|webp|JPG|PNG|JPEG|WEBP)$/.test(file.name)) {
        return file
      }
      return null
    },
    getImageByLink(url) {
      fetch(url)
        .then(res => res.blob())
        .then(blobFile => {
          window.history.replaceState({}, '', '/bgremover')
          if (!blobFile.type.includes('image/')) {
            Vue.notify({
              group: 'status',
              title: 'The link is broken or uploaded image is incompatible',
              text: ''
            })
            return
          }
          const fileName = `Image.${blobFile.type.split('/')[1]}`
          const file = new File([ blobFile ], fileName, { type: blobFile.type })
          this.handleFiles([ file ])
        })
        .catch((err) => {
          console.error(err)
          this.$store.dispatch('hideSinglePreviewPlaceholder')
        })
    },
    async handleUserBgr(file) {
      this.$store.dispatch('activeBackground', { indexImage: null, addIndex: 1 })
      if (!this.checkSizeCompatibleOne(file)) {
        Vue.notify({
          group: 'status',
          title: this.$t('BGREMOVER.ERRORS.IMAGE_TOO_BIG'),
          text: ''
        })
        return
      }
      const filteredFile = this.getFilteredFile(file)
      if (filteredFile) {
        await this.$userService.uploadImages(filteredFile)
        await this.$userService.getImage()
        this.clearFileInput()
      }
    },
    hidePlaceholderAndScroll({ scroll = false } = {}) {
      this.$store.dispatch('hideSinglePreviewPlaceholder')
      if (scroll) this.scrollToDropzone()
    },
    async handleFiles(files) {
      if (!this.checkSizeCompatibleMany(files)) {
        Vue.notify({
          group: 'status',
          title: this.$t('BGREMOVER.ERRORS.IMAGE_TOO_BIG'),
          text: ''
        })
        this.hidePlaceholderAndScroll({ scroll: true })
        this.$root.$emit('show-alert')
      } else {
        const filteredFiles = this.getFilteredFiles(files)
        if (filteredFiles.length) {
          await this.$batchesService.uploadBatch(filteredFiles)
        } else {
          this.hidePlaceholderAndScroll()
        }
      }
      this.clearFileInput()
    },
    onFileInput() {
      if (this.$refs.fileInput?.files?.length) {
        this.handleFiles(this.$refs.fileInput.files)
      }
    },
    onUserBgrInput() {
      this.handleUserBgr(this.$refs.fileInput.files[0])
    },
    onPaste(event) {
      const isAuthModalOpened = document.querySelector('.i8-modal__content')
      if (isAuthModalOpened) return
      if (this.isPasted) return

      this.isPasted = true
      const items = (event.clipboardData || event.originalEvent.clipboardData)
        .items
      const blobs = []
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') === 0) {
          blobs.push(items[i].getAsFile())
        }
      }
      this.handleFiles(blobs)
    },
    scrollToDropzone() {
      const el = document.querySelector('.bgr-dropzone')
      if (!el) return
      const { top } = el.getBoundingClientRect()
      window.scrollTo({
        top: window.pageYOffset + top - window.innerHeight / 2 + el.offsetHeight / 2,
        behavior: 'smooth'
      })
    }
  }
}
