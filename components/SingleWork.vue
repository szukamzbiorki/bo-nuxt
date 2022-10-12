<template>
  <div class="singleWork">
    <Workimages :images="imagesGallery"></Workimages>
    <WorkDescription :title="title" :size="size" :medium="medium" :description="description" />
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
  }
}
</script>


<style>
.singleWork {
  width: 100%;
  margin-bottom: var(--space);
  /* background-color: white; */
}
</style>
