<template>
  <v-container>
    <!-- <v-row class="text-center">
      <v-col class="mb-4 mt-4">
        <v-text-field
          label="Search Character Name.."
          v-model="characterSearchValue"
        ></v-text-field>
      </v-col>
    </v-row> -->
    <!-- <v-row>
      <v-col class="mb-4 mt-4">
        <v-btn color="primary" @click="addNewCharacter()"> Add New Character </v-btn>
      </v-col>
    </v-row> -->

    <!-- <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <app-phrase
          v-for="phrase in getPhrasesByCharacterName"
          :key="phrase._id"
          :phrase="phrase"
        ></app-phrase>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col class="mb-5" cols="12">
        <characters-card></characters-card>
      </v-col>
    </v-row> -->
    <v-row class="mb-10 mt-10">
      <v-btn @click="addItem()" block color="primary">Add New Record</v-btn>
    </v-row>
    <v-row>
      <v-col cols="24" v-for="item in getAllCharacters" :key="item._id">
        <characters-card
          :image="item.picture"
          :fName="item.firstName"
          :lName="item.lastName"
          :age="item.age"
          :id="item._id"
          class="mb-5"
          @deleteRecord="deleteRecord"
        ></characters-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import phrases from "../../data/phrases.json";
import characters from "../../data/characters.json";
import index from "../../store/index";
import charactersCard from "../../components/Phrases/CharactersCard.vue";

import Phrase from "./Phrase";

export default {
  name: "Phrases",

  components: {
    "app-phrase": Phrase,
    "characters-card": charactersCard,
  },

  data() {
    return {
      characterSearchValue: "",
    };
  },

  mounted() {
    this.$store.dispatch("getCharactersdata");
    console.log("getCharactersdata Dispatched");
    this.$store.dispatch("getPhrasesdata");
    console.log("getPhrasesdata Dispatched");
  },

  computed: {
    // getAllPhrases() {
    // return this.$store.getters.getPhraseData;
    // },

    getAllCharacters() {
      return this.$store.getters.getCharacterData;
    },

    // getCharacterId() {
    //   const characterObj = this.getAllCharacters.find((c) => {
    //     const firstName = this.characterSearchValue.split(" ")[0];
    //     const lastName = this.characterSearchValue.split(" ")[1];

    //     return c.firstName === firstName && c.lastName === lastName;
    //   });

    //   if (characterObj) {
    //     return characterObj._id;
    //   }

    //   return "";
    // },

    // getPhrasesByCharacterName() {
    //   return this.getAllPhrases.filter(
    //     (phrase) => phrase.character === this.getCharacterId
    //   );
    // },
  },
  methods: {
    deleteRecord(id) {
      this.$store.dispatch("deleteRecord", id);
    },

    addItem() {
      this.$store.dispatch("addRecord");
    },
  },
};
</script>