<template>
  <div class="workcontainer">
    <Posts :works="works" />
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    works: Array
  },
  computed: {
    // evenPosts() {
    //   return this.works.filter((post, index) => index % 2 === 0);
    // },
    // oddPosts() {
    //   return this.works.filter((post, index) => index % 2 !== 0);
    // }
  }
}
</script>


<style scope>
.workcontainer {
  height: auto;
  width: 60vw;
  max-width: 60vw;
  margin: 0 0 0 var(--space);
  overflow: scroll;
}

.workcontainer::-webkit-scrollbar {
  display: none;
}
</style>
