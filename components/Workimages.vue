<template>
  <div class="gallery">
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide>Slide 1</swiper-slide>
    </swiper>
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
  /* background-color: grey; */
  /* flex: 1 0 auto;
  display: flex;
  flex-direction: row; */
  display: block;
  width: calc(60vw - 40px);
  max-height: 70vh;
}

.workImage {
  max-width: 100%;
  margin-right: calc(var(--margin1) / 2);
  cursor: pointer;
  max-height: 70vh;
}

.workImage:last-child {
  margin-right: 0;
}
</style>