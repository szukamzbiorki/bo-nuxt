<template>
  <div class="infobox">
    <InfoButton></InfoButton>
    <div class="infocontent">
      <img class="biglogo" src="../static/assets/logorender.png" alt="">
      <div class="text">
        <div class="title">{{data.name}}</div>
        <div class="descriptiontext">
          {{data.bio}}
        </div>
        <div class="quote">
          {{data.quote}}
        </div>
        <div class="quote">
          <div v-for="slot in data.contactinfo" v-bind:key="slot.id">{{slot}}</div>
        </div>
        <div class="upcomingexhibitions">
          UPCOMING EXHIBITIONS
          <div v-for="upexpo in data.upexpos" v-bind:key="upexpo.id">
            {{upexpo.year}} {{upexpo.place}} {{upexpo.citycountry}}
          </div>
        </div>
        <!-- <div class="line"></div> -->
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'InfoBox',
  data() {
    return {
      data: []
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
    const query = "*[_type == \"info\"]{name,bio,quote,contactinfo[],upexpos[],expos[],education[]}";
    var infos = await this.fetchData(query);
    this.data = infos[0];
    console.log(this.data);
  }
}
</script>

<style>
.infobox {
  position: absolute;
  opacity: 100;
  left: calc(100vw - (2 * var(--space) + 30px));
  width: 65vw;
  height: 100vh;
  overflow: hidden;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 1s ease-in;
  /* background-color: grey; */
}

.active {
  left: 35vw !important;
  opacity: 100 !important;
  /* background-color: #ffffff !important; */
}

.infocontent {
  display: inline-block;
  padding-top: var(--space);
  background-color: #ffffff;
  padding: var(--space);
}

.biglogo {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: var(--margin1);
}

.descriptiontext {
  font-family: "CMU";
}

.quote {
  font-family: "CMUI";
}

.line {
  border-bottom: solid 1.5px black;
  height: var(--margin1);
  width: 100% !important;
}


.text * {
  margin-bottom: .5em;
  width: 50%;
}
</style>
