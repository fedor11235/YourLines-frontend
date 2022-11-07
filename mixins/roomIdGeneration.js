import md5 from 'md5'
export default {
  methods: {
    roomIdGeneration() {
      const collator =  new Intl.Collator()
      return md5([...arguments].join('').split('').sort((a,b)=>collator.compare(a,b)).join(''))
    }
  }
}