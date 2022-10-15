<template>
  <div class="gallery">
    <!-- <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide :key="image.id" v-for="image in images">
        <img :src="image.asset.url" class="workImage" />
      </swiper-slide>
    </swiper> -->
    <img v-for="image in images" :key="image.key" :src="image.asset.url" class="workImage" />
  </div>
</template>

<script>
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:


export default {
  props: {
    images: []
  },
  async created() {

    // this.images = await this.fetchImages()
  },
  methods: {

  },
  mounted() {
    // const swiper = new Swiper('.swiper', {
    //   // configure Swiper to use modules
    //   modules: [Navigation, Pagination]
    // });
  },
  computed: {
    // urlOfImg(url) {
    //   return require(url) // the module request
    // }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
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