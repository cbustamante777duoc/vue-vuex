import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp:'Memes V3',
    memes: ['spiderman','batman','robin'],
  },
  mutations: {
  },
  actions: {
    async getMemes({commit}){
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const result = response.json();

        console.log(result);
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
