<template>
  <div class="singleWork">
    <Workimages :images="imagesGallery"></Workimages>
    <WorkDescription :type="type" :title="title" :size="size" :medium="medium" />
  </div>
</template>

<script>

export default {
  props: {
    type: String,
    title: String,
    size: String,
    medium: String,
    imagesGallery: []
  }
}
</script>


<style>
.singleWork {
  width: 100%;
  margin-bottom: calc(var(--space) / 2);
  /* background-color: white; */
}
</style>
