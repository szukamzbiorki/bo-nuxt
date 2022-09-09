<template>
<div class="descriptionBox">
  <p class="worktitle">
    {{title}}
  </p>
  <p class="size">
    {{size}}
  </p>
  <p class="medium">
    {{medium}}
  </p>
  <p class="description">
    {{description}}
  </p>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    size: String,
    medium: String,
    description: String
  }
}
</script>

<style>
.descriptionBox * {
  margin-bottom: .3em;
}

.size {
  font-family: "CMU";
}

.medium {
  font-family: "CMU";
}
</style>
