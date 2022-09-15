<template>
  <div class="wrapper">
    <!-- <Menu :menu="data"></Menu> -->
    <Right></Right>
    <Content :works="works"></Content>

  </div>
</template>
  
<script>
import { groq } from '@nuxtjs/sanity'

if (process.browser) {
  var Masonry = require('masonry-layout');
}

export default {
  name: 'Home',
  data() {
    return {
      data: [],
      works: [],
      wow: false
    }
  },
  methods: {
    // async fetchData() {
    //   const res = await fetch("http://localhost:5001/alldata")
    //   const data = await res.json()
    //   return data
    // }

  },
  computed: {
    // destinationId() {
    //   return parseInt(this.$route.params.id)
    // },
    // getWork() {
    //   return this.data.find(content => content.menuslot === this.destinationId)
    // }
  },
  // async created() {
  //   this.data = await this.fetchData();
  //   this.works = await this.getWork.works;
  //   console.log(this.works);
  //   this.wow = true;
  // },

  // async fetch() {
  //   return this.data = await this.$sanity.fetch(query)
  // },

  methods: {
    // fetchData(query, number) {
    //   return this.$sanity.fetch(query, {
    //     number: number
    //   })
    // }
    fetchData(query) {
      return this.$sanity.fetch(query)
    }
  },
  async created() {
    const numerek = this.$route.params.id
    const query = '*[_type == "work"]{title,size,medium,description,imagesGallery[]{asset->{url}}}'
    // const query = '*[_type == "work" && whatever == "$number"]{title,size,medium,description,imagesGallery[]{asset->{url}}}'
    // const query = `*[_type == "work" && whatever == "${numerek}"]{title,size,medium,description,imagesGallery[]{asset->{url}}}`
    // this.works = await this.fetchData(query, numerek)
    this.works = await this.fetchData(query)
    console.log(this.works)
    console.log(numerek)
  }
}
</script>
  
<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 240px 1fr 200px;
  grid-template-rows: 1fr;
}
</style>
  
