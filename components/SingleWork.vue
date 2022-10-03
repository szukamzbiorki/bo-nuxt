<template>
  <div class="singleWork" id="work">
    <WorkDescription :title="title" :size="size" :medium="medium" :description="description" />
    <Workimages :images="imagesGallery"></Workimages>
  </div>
</template>

<script>
import { bindCallback } from 'rxjs';

export default {
  props: {
    title: String,
    size: String,
    medium: String,
    description: String,
    imagesGallery: []
  },

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
