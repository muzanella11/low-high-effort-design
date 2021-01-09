<template>
  <div class="l-default">
    <!-- Begin Header -->
    <kal-header :is-mobile="isShownMobile" />
    <!-- End Header -->

    <!-- Begin Main -->
    <nuxt />
    <!-- End Main -->

    <!-- Begin Footer -->
    <kal-footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import KalHeader from '~/components/header/template-header.vue'
import KalFooter from '~/components/footer/template-footer.vue'
import MixinsLayout from '~/mixins/mixins-layout.js'

export default {
  components: {
    KalHeader,
    KalFooter
  },

  mixins: [
    MixinsLayout
  ],

  data () {
    return {
      //
    }
  }
}
</script>
