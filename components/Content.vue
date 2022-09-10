<template>
  <div class="mainContainer">
    <div class="container">
      <SingleWork v-for="work in works" :key="work.id" v-bind="work" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    works: []
  },
  computed: {

  }
}
</script>


<style scope>
.mainContainer {
  width: auto;
  max-height: 100vh;
  grid-column: 2 / 3;
  overflow: hidden;
  margin: var(--margin1);
  margin-left: 0;
}

.container {
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
  padding-left: var(--margin1);
}

.container::-webkit-scrollbar {
  display: none;
}

.container>div {
  margin-right: var(--margin1);
}

.container>img {
  margin-right: var(--margin1);
}

.descriptionBox {
  height: 100%;
  min-width: 300px;
}

.workImage {
  height: 100%;
  width: auto;
}
</style>
