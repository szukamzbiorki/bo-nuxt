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
.singleWork {
  height: 100%;
  /* calc(100% - 5em); */
  /* display: flex;
  flex-direction: column; */
  display: inline-block;
  /* justify-content: flex-start; */
  margin-right: var(--margin1);
  transition: opacity 0.2s;
  transition-timing-function: ease-out;
}
</style>
