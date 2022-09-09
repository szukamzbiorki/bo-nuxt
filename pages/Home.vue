<template><div>
<Menu :menu="data" />
<router-view :works="works" :key="$route.path" v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component v-if="wow" :is="Component" />
  </transition>
</router-view>
</div>
<!-- <Content :works="works" /> -->
</template>

<script>

export default {
  name: 'Home',
  components: {
    Menu,
    Content
  },
  data() {
    return {
      data: [],
      works: [],
      wow: false
    }
  },
  methods: {
    async fetchData() {
      const res = await fetch("http://localhost:5001/alldata")
      const data = await res.json()
      return data
    }
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    getWork() {
      return this.data.find(content => content.menuslot === this.destinationId)
    }
  },
  async created() {
    this.data = await this.fetchData();
    this.works = await this.getWork.works;
    console.log(this.works);
    this.wow = true;
  }
  
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translate(0px, 1000px);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translate(0px, -1500px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
