<template>
  <!-- <div class="gallery">
    <swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide :key="image.id" v-for="image in images">
        <img :src="image.asset.url" class="workImage" />
      </swiper-slide>
    </swiper> 
  </div> -->
  <div class="gallery">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="image.id" v-for="image in images">
          <img :src="image.asset.url" class="workImage" />
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- If navigation buttons are needed -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
  <!-- <img v-for="image in images" :key="image.key" :src="image.asset.url" class="workImage" /> -->

</template>

<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay, EffectCreative } from 'swiper';
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    images: []
  },
  mounted() {
    const swiper = new Swiper('.swiper', {
      // direction: vertical,
      loop: true,
      effect: 'Creative',
      creativeEffect: {
        prev: {
          translate: ['0%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      // // remove unused modules if needed
      // modules: [Navigation, Pagination, EffectCards, Autoplay],
      // // Pagination if needed
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true,
      // },
      // Autoplay if needed
      // autoplay: {
      //   delay: 1500,
      // },
      // Navigation arrows if needed
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    })
    // you can use different options later
    // swiper.on('activeIndexChange', (swiper) => {
    //   // console.log(swiper)
    // })
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

.swiper-slide-shadow {
  display: none !important;
}
</style>