import Vue from 'vue'

// Сделал для общего сокета уведомлений, нужно придумать как сделать лучше
const bus = new Vue({
  data: {
    socket: null
  }
})

export default (ctx, inject) => {
  inject('busDate', bus)
}