<template>
  <SanityImage class="workImage" asset-id="image-662578f2f6639631a3edb439046c8d1a8387315b-3024x4032-jpg"
    auto="format" />
</template>

<script>
export default {
  props: {
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