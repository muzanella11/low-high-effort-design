<template>
  <div class="l-default">
    <adaptive-layout>
      <template slot="desktop">
        <!-- Begin Header -->
        <kal-header />
        <!-- End Header -->

        <!-- Begin Main -->
        <nuxt />
        <!-- End Main -->

        <!-- Begin Footer -->
        <kal-footer />
        <!-- End Footer -->
      </template>

      <template slot="mobile">
        <nuxt />
      </template>
    </adaptive-layout>
  </div>
</template>

<script>
import AdaptiveLayout from '~/layouts/adaptive-layout/template-adaptive-layout.vue'
import KalHeader from '~/components/header/template-header.vue'
import KalFooter from '~/components/footer/template-footer.vue'

export default {
  components: {
    AdaptiveLayout,
    KalHeader,
    KalFooter
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3B8070;
  color: #3B8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #FFF;
  background-color: #3B8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495E;
  color: #35495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #FFF;
  background-color: #35495E;
}
</style>
