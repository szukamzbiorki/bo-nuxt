<template>
  <div class="descriptionBox">
    <span class="worktitle bigtype">
      {{title}}
    </span>
    <span class="size smalltype">
      {{size}}
    </span>
    <span class="medium smalltype">
      {{medium}}
    </span>
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
.descriptionBox {
  margin-top: 5px;
  /* flex: 0 0 auto;
  min-width: 300px; */
  display: inline-block;
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
</style>
