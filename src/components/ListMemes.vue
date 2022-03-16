<template>
  <h1>{{title}}</h1>
  <div class="row">
      <template v-for="meme in memes" :key="meme.id">
          <Meme :meme="meme" />
      </template>
  </div>

</template>

<script>
import {onMounted,computed} from 'vue';
import {useStore} from 'vuex';
import Meme from './Meme.vue';
export default {

    components:{
        Meme
    },

    setup(){
        const store = useStore();//inicializacion hook
        //se hace reactivo para que cuando se actualize conserve los datos
        const memes = computed(()=>store.state.memes); 

        console.log(memes);
        //apenas se carga el components se carga con los datos
        onMounted(() =>{
            store.dispatch('getMemes');
        });

        return{
            title: store.state.titleApp,
            memes,
        };
    }
};
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>