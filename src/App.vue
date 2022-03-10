<template>
<h1>{{$store.state.titleApp}}</h1>
<h3>{{titleApp}}</h3>
</template>

<script>


import {useStore} from 'vuex';

export default {
  name: 'App',
  setup(){
    const store = useStore();

    console.log(store.state.titleApp);
    console.log(store.state.memes);

    //con ...store.state puedo acceder a todas las variables
    return{
      ...store.state,
    };

  }
}
</script>

<style>

</style>
