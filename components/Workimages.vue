<template>
    <div>
    <img v-for="image in images" :key="image.id" class="workImage" :src="`/static/assets/images/${image.url}`" alt="" />
</div>
</template>

<script>
    export default {
  props: {
    images: Object
  },
  async created() {
    // this.images = await this.fetchImages()
  },
  methods: {

  },
  computed: {
    // urlOfImg(url) {
    //   return require(url) // the module request
    // }
  }
}
</script>