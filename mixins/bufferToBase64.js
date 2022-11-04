export default {
  methods: {
    bufferToBase64(image) {
      if (typeof image === 'object' && image !== null) {
        return Buffer.from(image, "base64")
      }
      return image
    }
  }
}