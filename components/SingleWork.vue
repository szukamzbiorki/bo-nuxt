<template>
<div>
  <WorkDescription :title="title" :size="size" :medium="medium" :description="description" />
  <Workimages :images="images"></Workimages>
</div>
</template>

<script>

export default {
  props: {
    title: String,
    size: String,
    medium: String,
    description: String,
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

</style>
