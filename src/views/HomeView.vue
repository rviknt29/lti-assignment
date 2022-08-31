<template>
<div>
  <app-phrases></app-phrases>
  <!-- <phrases-table></phrases-table> -->
</div>
</template>

<script>
  import Phrases from '../components/Phrases/Phrases.vue'
  // import PhrasesTable from '../components/Phrases/PhrasesTable.vue'

  export default {
    name: 'Home',

    components: {
      'app-phrases': Phrases,
      // 'phrases-table' : PhrasesTable
    },
  }
</script>
