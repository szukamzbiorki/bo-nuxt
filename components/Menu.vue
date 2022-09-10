<template>
  <div class="menu">
    <NuxtLink :key="item.id" v-for="item in menuslots" :to="item.router">
      <img class="shape" :src="`/images/${item.iconurl}.svg`" alt="">
    </NuxtLink>
    <!-- <img v-for="item in menu" :key="item.id" class="shape" :src="`/images/${item.iconurl}`" alt=""> -->
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`{ "menuslots": *[_type == "menuslot"] }`

export default {
  name: 'Menu',
  data() {
    return {
      menuslots: []
    }
  },
  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  },
  created() {
    console.log(this.menuslots)
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
