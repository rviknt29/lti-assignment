<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 mt-4">
        <v-text-field label="Search Character Name.." v-model="characterSearchValue"></v-text-field>
      </v-col>

      <v-col class="mb-5" cols="12">
        <app-phrase v-for="phrase in getPhrasesByCharacterName" :key="phrase._id" :phrase="phrase"></app-phrase>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import phrases from "../../data/phrases.json";
import characters from "../../data/characters.json";

import Phrase from "./Phrase";

export default {
    name: "Phrases",

    components: {
        'app-phrase': Phrase
    },

    data() {
        return {
            characterSearchValue: ''
        }
    },

    computed: {
        getAllPhrases() {
            return phrases.data;
        },

        getAllCharacters() {
            return characters.data;
        },

        getCharacterId() {
            const characterObj =  this.getAllCharacters.find(c => {
                const firstName = this.characterSearchValue.split(' ')[0]; 
                const lastName = this.characterSearchValue.split(' ')[1];
                
                return c.firstName === firstName && c.lastName === lastName;
            });

            if(characterObj) {
                return characterObj._id;
            }
            
            return '';
        },

        getPhrasesByCharacterName() {
            return this.getAllPhrases.filter(phrase => phrase.character === this.getCharacterId);
        }
    }

}
</script>