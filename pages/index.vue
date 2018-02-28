<template>
  <div class="container">
    <cp></cp>
  </div>
</template>

<script>

  import Vue from 'vue'
  import cp from '~/components/cp'

  export default {
    name: 'index',
    components: {
      cp
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss"
       scoped>

  .test {
    background-image: url('../assets/img.png');
  }

</style>
