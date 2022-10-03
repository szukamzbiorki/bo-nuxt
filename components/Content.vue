<template>
  <div class="mainContainer">
    <div class="container">
      <Posts :works="evenPosts" />
      <Posts :works="oddPosts" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    works: Array
  },
  computed: {
    evenPosts() {
      return this.works.filter((post, index) => index % 2 === 0);
    },
    oddPosts() {
      return this.works.filter((post, index) => index % 2 !== 0);
    },
  },
}
</script>


<style scope>
.mainContainer {
  width: auto;
  max-height: 100vh;
  grid-column: 2 / 4;
  overflow: hidden;
  margin: var(--margin1);
  margin-left: 0;
}

.container {
  width: auto;
  height: 100%;
  display: block;
  overflow: hidden;
  /* padding-left: var(--margin1); */
  padding-left: 0;
}

.container>.workrow:nth-child(1) {
  margin-bottom: 20px;
}

.container::-webkit-scrollbar {
  display: none;
}

/* .container *:not(:last-child) {
  margin-right: var(--margin1);
} */
</style>
