export default {
  data () {
    return {
      isShownMobile: false,
      innerWidth: 0,
      options: [{
        value: 'Option1',
        label: 'Option1'
      }, {
        value: 'Option2',
        label: 'Option2'
      }, {
        value: 'Option3',
        label: 'Option3'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      entry: {
        select: '',
        keyword: ''
      }
    }
  },

  mounted () {
    this.initAdaptive()
  },

  methods: {
    initAdaptive () {
      this.innerWidth = window.innerWidth

      this.setIsShownMobile()

      window.onresize = () => {
        this.innerWidth = window.innerWidth

        this.setIsShownMobile()
      }
    },

    setIsShownMobile () {
      this.isShownMobile = this.innerWidth <= (1200 - 1)
    }
  }
}
