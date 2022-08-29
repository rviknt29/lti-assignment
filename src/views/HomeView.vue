<template>
  <app-phrases></app-phrases>
</template>

<script>
  import Phrases from '../components/Phrases/Phrases.vue'

  export default {
    name: 'Home',

    components: {
      'app-phrases': Phrases
    },
  }
</script>
