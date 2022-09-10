<template>
  <div class="gallery">
    <img :key="image.id" v-for="image in images" :src="image.asset.url" class="workImage" />
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

<style>
.gallery {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.workImage {
  height: 100%;
  width: auto;
}
</style>