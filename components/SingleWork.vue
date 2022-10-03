<template>
  <div class="singleWork">
    <WorkDescription :title="title" :size="size" :medium="medium" :description="description" />
    <Workimages :images="imagesGallery"></Workimages>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    size: String,
    medium: String,
    description: String,
    imagesGallery: []
  },
  async created() {
    // this.images = await this.fetchImages()
  },
  // mounted() {
  //   this.animateOnScroll()
  // },

  // methods: {
  //   animateOnScroll() {
  //     this.$gsap.to('.singleWork', {
  //       background: "black",
  //       ease: 'Power1.easeInOut',
  //       scrollTrigger: {
  //         trigger: '.singleWork'
  //       }
  //     })
  //   }
  // },
  computed: {
    // urlOfImg(url) {
    //   return require(url) // the module request
    // }
  }
}
</script>


<style>
.singleWork {
  height: 100%;
  /* calc(100% - 5em); */
  /* display: flex;
  flex-direction: column; */
  display: inline-block;
  /* justify-content: flex-start; */
  margin-right: var(--margin1);
  /* scroll-snap-align: start; */
}
</style>
