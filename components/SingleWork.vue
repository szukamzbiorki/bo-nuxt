<template>
  <div class="dupa">
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
    imagesGallery: Object
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
.dupa {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
