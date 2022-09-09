<template>
<BioBox v-if="done" />
</template>

<script>

export default {
  name: 'Bio',
  components: {
    BioBox
  },
  data() {
    return {
      done: false
    }
  },
  mounted() {
    this.done = true;
  }
}
</script>

<style>
</style>
