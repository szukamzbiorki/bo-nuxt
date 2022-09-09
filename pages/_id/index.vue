<template>
<div class="wrapper">
  <Menu :menu="data"></Menu>
  <Content :works="works"></Content>
  <Right></Right>
</div>
  <!-- <Content :works="works" /> -->
</template>
  
<script>
  
  export default {
    name: 'H`ome',
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
 

  .wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 1fr;
}
  </style>
  
