<template>
  <div class="wrapper">
    <!-- <Menu :menu="data"></Menu> -->
    <Right></Right>
    <Content :works="works"></Content>
    <SingleWorkModal></SingleWorkModal>
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
  methods: {},
  computed: {},
  methods: {
    fetchData(query) {
      return this.$sanity.fetch(query);
    }
    // fetchData(query, number) {
    //   return this.$sanity.fetch(query, {
    //     number: number
    //   })
    // }
  },
  async created() {
    const numerek = this.$route.params.id;
    const query = "*[_type == \"work\"]{title,size,medium,description,imagesGallery[]{asset->{url}}}";
    // const query = '*[_type == "work" && whatever == "$number"]{title,size,medium,description,imagesGallery[]{asset->{url}}}'
    // const query = `*[_type == "work" && whatever == "${numerek}"]{title,size,medium,description,imagesGallery[]{asset->{url}}}`
    // this.works = await this.fetchData(query, numerek)
    this.works = await this.fetchData(query);
    console.log(this.works);
    console.log(numerek);
  },
  components: { SingleWorkModal }
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
  
