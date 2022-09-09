<template>
<div class="menu">
  <!-- <NuxtLink v-bind="key" v-for="item in menu" :to="item.router">
    <img class="shape" :src="`/images/${item.iconurl}.svg`" alt="">
  </NuxtLink> -->
  <!-- <img v-for="item in menu" :key="item.id" class="shape" :src="`/images/${item.iconurl}`" alt=""> -->
</div>
</template>

<script>
export default {
  name: 'Menu',
  components: {},
  props: {
    menu: Object,
  }
}
</script>

<style>
.menu {
  width: 200px;
  height: 100vh;
  background-color: darkgrey;
  grid-column: 1 / 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  justify-content: space-around;
  z-index: 100;
}

.menu img {
  width: 90%;
  height: auto;
}

.shape {
  max-height: 150px;
  max-width: 150px;
}
</style>
