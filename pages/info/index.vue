<template>
<div class="wrapper">
  <InfoBox v-if="done" />
  <Right/>
</div>
</template>

<script>

export default {
  name: 'Info',
  data() {
    return {
      done: true
    }
  },
  onMounted() {
    done = true;
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
