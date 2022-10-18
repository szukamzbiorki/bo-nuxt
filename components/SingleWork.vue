<template>
  <div class="singleWork">

    <div class="gallery">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="image.id" v-for="image in imagesGallery">
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
    <!-- <Workimages :images="imagesGallery"></Workimages>
    <WorkDescription :type="type" :title="title" :size="size" :medium="medium" /> -->
    <div class="descriptionBox">
      <div class="slidePrev-btn navbut">&#2190;</div>
      <div class="slideNext-btn navbut">&#2192;</div>
      <span :class="type">
        {{type}}
      </span>
      <span class="worktitle bigtype">
        {{title}}
      </span>
      <span class="size smalltype">
        {{size}}
      </span>
      <span class="medium smalltype">
        {{medium}}
      </span>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay, EffectCreative } from 'swiper';
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, EffectCreative, EffectCards]);

export default {
  props: {
    type: String,
    title: String,
    size: String,
    medium: String,
    imagesGallery: [],
  },
  mounted() {
    const swiper = new Swiper('.swiper', {
      // direction: vertical,
      loop: true,
      effect: 'cards',
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
      navigation: {
        nextEl: '.slideNext-btn',
        prevEl: '.slidePrev-btn',
      },
    })
    // you can use different options later
    // swiper.on('activeIndexChange', (swiper) => {
    //   // console.log(swiper)
    // })
  }
}
</script>


<style>
.navbut {
  font-family: "DiGrotesk";
  display: inline-block;
  background-color: aquamarine;
}

.singleWork {
  width: 100%;
  margin-bottom: calc(var(--space) / 2);
  /* background-color: white; */
}

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

.descriptionBox {
  margin-top: 5px;
  /* flex: 0 0 auto;
  min-width: 300px; */
  display: inline-block;
}

.descriptionBox * {
  margin-bottom: .1em;
}

.smalltype {
  font-family: "CMU";
  font-size: 13px;
}

.bigtype {
  font-size: 17px;
}

.work {
  padding: 2px 2px 0 2px;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  background-color: blue;
}

.exhibition {
  padding: 2px 2px 0 2px;
  display: inline-block;
  color: white;
  text-transform: uppercase;
  background-color: red;
}

@media screen and (max-width: 820px) {
  .gallery {
    width: calc(100vw - 2*var(--space)) !important;
    max-height: 70vh;
  }

  .descriptionBox {
    width: calc(100vw - 2*var(--space));
    max-width: calc(100vw - 2*var(--space));
  }

  .descriptionBox * {
    overflow-wrap: break-word;
    display: inline-block;
  }
}
</style>
