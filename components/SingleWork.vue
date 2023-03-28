<template>
  <div class="singleWork swiper__container">
    <div class="gallery">
      <img v-if="imagesGallery.length < 2" class="workImage" :src="imagesGallery[0].asset.url" alt="" srcset="">
      <div v-if="imagesGallery.length > 1" class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="image.id" v-for="image in imagesGallery">
            <img :src="image.asset.url" class="workImage" />
          </div>
        </div>

      </div>
    </div>
    <!-- <Workimages :images="imagesGallery"></Workimages>
    <WorkDescription :type="type" :title="title" :size="size" :medium="medium" /> -->
    <div class="descriptionBox">
      <div v-if="imagesGallery.length > 1" class="slidePrev-btn navbut">&#8592;</div>
      <div v-if="imagesGallery.length > 1" class="slideNext-btn navbut">&#8594;</div>
      <span :class="type">
        {{ type }}
      </span>
      <span class="worktitle bigtype">
        {{ title }}
      </span>
      <span class="size smalltype">
        {{ sizeplace }}
      </span>
      <span class="medium smalltype">
        {{ mediumyear }}
      </span>
    </div>
  </div>
</template>

<script>
import {
  Swiper,
  Navigation,
  Pagination,
  EffectCards,
  Autoplay,
  EffectCreative
} from 'swiper';
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, EffectCreative, EffectCards]);

export default {
  props: {
    type: String,
    title: String,
    sizeplace: String,
    mediumyear: String,
    imagesGallery: [],
  },
  mounted() {
    document.querySelectorAll('.swiper').forEach(swiper => {
      const swiperEl = new Swiper(swiper, {
        loop: false,
        slidesPerView: 1,
        simulateTouch: false,
        // centeredSlides: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: [0, 0, 0],
            opacity: 0
          },
          next: {
            translate: [0, "100%", 0],
            opacity: 1
          },
        }
      })


      const prevButton = swiper.closest('.swiper__container').querySelector('.slidePrev-btn');
      const nextButton = swiper.closest('.swiper__container').querySelector('.slideNext-btn');

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          swiperEl.slidePrev();
        })
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          swiperEl.slideNext();
        })
      }


      // if (swiperEl.isBeginning) {
      //   swiperEl.navigation.update()
      // }
    })

    // you can use different options later
    // swiper.on('activeIndexChange', (swiper) => {
    //   // console.log(swiper)
    // })
  }
}
</script>


<style>
.swiper-wrapper {
  overflow: visible;
}

.size {
  color: grey;
}

.gallery {
  overflow: visible;
}

.navbut {
  font-family: "DiGrotesk";
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

.singleWork {
  overflow: visible;
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
  margin-bottom: 7px;
}

.workImage {
  max-width: 100%;
  margin-right: calc(var(--margin1) / 2);
  cursor: pointer;
  max-height: 70vh;
  cursor: pointer;
}

.workImage:last-child {
  margin-right: 0;
}

.swiper-slide {
  background-color: #ededed;
  height: 100% !important;
}

.swiper-slide-shadow {
  color: white;
  /* display: none !important; */
}

.descriptionBox {
  margin-top: 0px;
  /* flex: 0 0 auto;
  min-width: 300px; */
  display: inline-block;
  white-space: normal;
  /* white-space: pre-wrap; */
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

.swiper-button-disabled {
  color: grey;
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

  .swiper-slide {
    background-color: #ededed;
  }
}
</style>
