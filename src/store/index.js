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
    async getMemes({commit},params){
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const result =  await response.json();
        

        if (!params?.total) {
        commit('setMemes', result.data.memes); //actualizo mutations con los nuevos datos desde la api
        }else{
          const resultTemp = [];//arreglo que va contener la cantidad de memes que se hace en el select(ListMemes)
          result.data.memes.forEach((meme, index)=>{
            if (index < params.total) {
              resultTemp.push(meme);//guardo la cantidad
            } 
          });
          commit('setMemes', resultTemp); //retorno la nueva cantidad
        }
        
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
