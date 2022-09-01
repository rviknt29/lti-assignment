<template>
<div>
  <app-phrases></app-phrases>
</div>
</template>

<script>
  import Phrases from '../components/Phrases/Phrases.vue'

  export default {
    name: 'Home',

    components: {
      'app-phrases': Phrases,
    },
  }
</script>
