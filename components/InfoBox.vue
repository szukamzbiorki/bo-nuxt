<template>
  <div class="infobox">
    <InfoButton></InfoButton>
    <div class="infocontent">
      <img class="biglogo" src="../static/assets/logorender.png" alt="">
      <div class="infocontainer">
        <!-- INTRO SECTION -->

        <div class="title">{{data.name}}</div>
        <div class="intro">
          <div class="descriptiontext">
            {{data.bio}}
          </div>
          <div class="quote">
            {{data.quote}}
          </div>
        </div>
        <!-- CONTACT SECTION -->
        <div class="contact">
          <div v-for="slot in data.contactinfo" v-bind:key="slot.id">{{slot}}</div>
        </div>
        <!-- EXHIBITIONS SECTION -->
        <div class="exhibitions">
          <!-- UPCOMING EXHIBITIONS SECTION -->
          <div class="upcomingexhibitions marbot">
            <div class="exhibitionstitle">UPCOMING EXHIBITIONS</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="expo in data.upexpos" v-bind:key="expo.id">
                <div>{{expo.year}}</div>
                <div>{{expo.place}}</div>
                <div>{{expo.citycountry}}</div>
              </div>
            </div>
          </div>
          <!-- EXHIBITIONS SECTION -->
          <div class="currentexhibitions marbot">
            <div class="exhibitionstitle">EXHIBITIONS</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="expo in data.expos" v-bind:key="expo.id">
                <div>{{expo.year}}</div>
                <div>{{expo.place}}</div>
                <div>{{expo.citycountry}}</div>
              </div>
            </div>
          </div>
          <!-- EDUCATION SECTION -->
          <div class="currentexhibitions marbot">
            <div class="exhibitionstitle">EDUCATION</div>
            <div class="expoinstances">
              <div class="expogrid marbot" v-for="expo in data.education" v-bind:key="expo.id">
                <div>{{expo.year}}</div>
                <div>{{expo.place}}</div>
                <div>{{expo.citycountry}}</div>
              </div>
            </div>
          </div>
        </div>
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
    const query = "*[_type == \"info\"]{name,bio,quote,contactinfo[],expos[],upexpos[],education[]}";
    var infos = await this.fetchData(query);
    this.data = infos[0];
  }
}
</script>

<style>
.marbot {
  margin-bottom: .5em;
}

.infobox {
  z-index: 500;
  position: absolute;
  opacity: 100;
  left: calc(100vw - (2 * var(--space) + 30px));
  width: 65vw;
  /* max-height: 100vh; */
  max-height: calc(var(--vh) * 100);
  overflow: hidden;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  transition: .6s ease-in-out;
  /* background-color: grey; */
}

.active {
  left: 35vw !important;
  opacity: 100 !important;
  /* background-color: #ffffff !important; */
}

.infocontent {
  display: inline-block;
  background-color: #ffffff;
  padding: var(--space);
}

.biglogo {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: var(--space);
}

.infocontainer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: calc(var(--space) / 2);
}

.title {
  grid-column: 1 / 7;
}

.intro {
  grid-column: 1 / 5;
  max-width: 45em;
}

.intro>div:not(:last-child) {
  margin-bottom: .5em;
}

.contact {
  grid-column: 5 / 7;
}

.exhibitions {
  grid-column: 1 / 7;
}

.exhibitionstitle {
  margin-bottom: .5em;
}

.expogrid {
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: auto;
  grid-gap: calc(var(--space) / 2);
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

@media screen and (max-width: 820px) {
  .infobox {
    width: 100vw !important;
  }

  .active {
    left: 0 !important;
  }

  .infocontent {
    max-height: calc(100vh - 2*var(--space)) !important;
    overflow: scroll !important;
  }

  .infocontent::-webkit-scrollbar {
    display: none !important;
  }

  .intro {
    grid-column: 1 / 7;
  }

  .contact {
    grid-column: 1 / 7;
  }
}
</style>
