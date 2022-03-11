<template>
  <h1>{{title}}</h1>
  <p>
      {{memes}}
  </p>

</template>

<script>
import {onMounted,computed} from 'vue';
import {useStore} from 'vuex';
export default {
    setup(){
        const store = useStore();//inicializacion hook
        //se hace reactivo para que cuando se actualize conserve los datos
        const memes = computed(()=>store.state.memes); 

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

<style>

</style>