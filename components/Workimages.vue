<template>
  <div class="gallery">
    <img :key="image.id" v-for="image in images" :src="image.asset.url" class="workImage" />
  </div>
</template>

<script>
export default {
  props: {
    images: []
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
  margin-top: 4px;
  /* background-color: grey; */
  /* flex: 1 0 auto;
  display: flex;
  flex-direction: row; */
  display: block;
  height: calc(100% - 55px);
}

.workImage {
  height: 100%;
  width: auto;
  margin-right: calc(var(--margin1) / 2);
}

.workImage:last-child {
  margin-right: 0;
}
</style>