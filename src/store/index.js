import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import phrases from "../data/phrases.json";
import characters from "../data/characters.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    phraseData: "",
    characterData: "",
  },
  getters: {
    getPhraseData(state){
      return state.phraseData
    },
    getCharacterData(state){
      return state.characterData
    }
  },
  mutations: {
    setCharacterData(state, payload){
      Vue.set(state, "characterData", payload)
    }
  },
  actions: {
    getPhrasesData({commit}){
        axios.get("api/todos").then(res=>{
          console.log("data---->", res);
          commit("setCharacterData", res.data.todos)

        })

      // getfetch("../data/phrases.json")
      //   .then((res) => res.json())
      //   .then((json) => {
      //     // this.users = json.users
      //     console.log("Phrases Data : ", json)
      //   })
    },

    deleteRecord({commit,dispatch}, id){
      axios.delete(`api/delete/${id}`).then(res => {
        dispatch("getPhrasesData");
      })
      
    },

    addRecord({commit,dispatch}){
      axios.post(`api/add`, characters.data[3]).
      then((res) => {
        console.log("Adding this element------", res)
        dispatch("getPhrasesData");
      })
    }

    // getCharactersdata(){
    //   getfetch("../data/characters.json")
    //     .then((res) => res.json())
    //     .then((json) => {
    //       // this.users = json.users
    //       console.log("Characters Data : ", json)
    //     })
    // }
    
  },
  modules: {
  }
})
