<template>
  <h1>{{ title }}</h1>
  <div class="total-show">
    <select @change="changeTotalShow">
      <option value="">All</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>
  <div class="row">
    <template v-for="item in memes" :key="item.id">
      <Meme :meme="item" />
    </template>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Meme from "./Meme.vue";
export default {
  components: {
    Meme,
  },

  setup() {
    const store = useStore(); //inicializacion hook
    //se hace reactivo para que cuando se actualize conserve los datos
    const memes = computed(() => store.state.memes);

    console.log(memes);
    //apenas se carga el components se carga con los datos
    onMounted(() => {
      store.dispatch("getMemes");
    });

    /**
     *  funcion que cambia la cantidad de memes a mostar segun el select
     */
    const changeTotalShow = (e) => {
      store.dispatch("getMemes",{
          total: e.target.value
      });
    };

    return {
      title: store.state.titleApp,
      memes,
      changeTotalShow,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.total-show {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}
</style>
