import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp:'Memes V3',
    memes: [],
  },
  mutations: {
    setMemes(state,payload) {
      state.memes = payload; //guardo todos los memes

    },
  },
  actions: {
    async getMemes({commit}){
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const result =  await response.json();
        //actualizo mutations con los nuevos datos desde la api
        commit('setMemes', result.data.memes);
        
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
  getters:{

  },
})
