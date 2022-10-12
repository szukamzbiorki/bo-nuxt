<template>
  <div class="wrapper">
    <!-- <Menu :menu="data"></Menu> -->
    <Right></Right>
    <Content :works="works"></Content>
    <!-- <SingleWorkModal></SingleWorkModal> -->
  </div>
</template>
  
<script>
export default {
  name: "Home",
  data() {
    return {
      data: [],
      works: [],
      wow: false
    };
  },
  methods: {
    //ALTERNATIVE WAY OF QUERY
    // fetchData(query, number) {
    //   return this.$sanity.fetch(query, {
    //     number: number
    //   })
    // }

    fetchData(query) {
      return this.$sanity.fetch(query);
    }
  },
  async created() {
    //ALTERNATIVE WAY OF QUERY
    // const numerek = this.$route.params.id;
    // const query = `*[_type == "work" && whatever == "${numerek}"]{title,size,medium,description,imagesGallery[]{asset->{url}}}`
    // this.works = await this.fetchData(query, numerek)

    const query = "*[_type == \"work\"]{title,size,medium,description,imagesGallery[]{asset->{url}}}";
    this.works = await this.fetchData(query);
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
  
