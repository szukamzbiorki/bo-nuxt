<template>
  <div class="wrapper">
    <Logo></Logo>
    <Content :works="works"></Content>
    <InfoBox></InfoBox>
  </div>
</template>
  
<script>
import InfoBox from "../components/InfoBox.vue";
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
  },
  components: { InfoBox }
}
</script>
  
<style>
:root {
  --space: 15px;
}

body * {
  font-family: "Union" !important;
  font-size: 13px !important;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
}
</style>
  
