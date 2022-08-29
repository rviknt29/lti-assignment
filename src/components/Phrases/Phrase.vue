<template>
  <v-card elevation="2">
    <h2>Phrase by {{ characterName }}</h2>
    <p>{{ phrase.phrase }}</p></v-card
  >
</template>

<script>
import charactersObject from "../../data/characters.json";
export default {
  name: "Phrase",
  props: ["phrase"],
  data() {
    return {};
  },
  computed: {
    getAllCharacters() {
      return charactersObject.data;
    },

    getChracterById() {
      return this.getAllCharacters.find((c) => c._id === this.phrase.character);
    },

    characterName() {
      return `${this.getChracterById.firstName} ${this.getChracterById.lastName}`;
    },
  },
};
</script>