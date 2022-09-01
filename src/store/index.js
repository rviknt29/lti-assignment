import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import phrases from "../data/phrases.json";
import characters from "../data/characters.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phrasesData: "",
    characterData: "",
  },
  getters: {
    getPhraseData(state) {
      return state.phrasesData
    },
    getCharacterData(state) {
      return state.characterData
    }
  },
  mutations: {
    setCharacterData(state, payload) {
      Vue.set(state, "characterData", payload)
    },

    setPhrasesdata(state, payload) {
      Vue.set(state, "phrasesData", payload)
    }
  },
  actions: {
    getCharactersdata({ commit }) {
      axios.get("api/todos").then(res => {
        console.log("Characters data---->", res);
        commit("setCharacterData", res.data.todos)

      })
    },

    deleteRecord({ commit, dispatch }, id) {
      axios.delete(`api/delete/${id}`).then(res => {
        dispatch("getCharactersdata");
      })

    },

    addRecord({ commit, dispatch }) {
      let n = Math.floor(Math.random() * characters.data.length);
      axios.post(`api/add`, characters.data[n]).
        then((res) => {
          console.log("Adding this element------", res)
          dispatch("getCharactersdata");
        })
    },

    getPhrasesdata({ commit }) {
      axios.get("api/todos").then(res => {
        console.log("Phrases Data--->", res);
        commit("setPhrasesdata", res.data.todos)

      })
    },

    deleteCharacter({commit, getters}, id){
      const currentCharacters = getters.getCharacterData;
      const filteredCharacters = currentCharacters.filter(c => c.id !== id);
      commit("setCharacterData", filteredCharacters)
    }

  },
  modules: {
  }
})
