<template>
  <div class="aboutBox">
    <div @click="goToPrev()" class="back">
      back </div>
    <img class="biglogo" src="../static/assets/logorender.png" alt="">
    <div class="text">
      <div class="title">Bo Deurloo (b. 1999, The Hague)</div>
      <div class="descriptiontext">
        As an artist born in the time of the internet and mass media, Bo derives his inspiration from the two spaces
        in
        our contemporary times exist in. The offline and the online. As a teenager, he spent most of his time on the
        online side of living,
        giving himself the freedom to explore interests and create friendships from all over the world on the web,
        but
        with the loss of the real world. With his interest and work with and in art, he realizes the impact of the
        online world on the real
        world around us. The aim of creating an artwork is to create a visual trigger. Something in your eyesight
        that
        makes you shift from rationality to reality. This shift is what I try to embody with my work, in any way
        possible. This effect is
        closely related to Koan zen riddles. The form of the works often is mystic, absurd, open narrative, and
        abstract. Assembling parts from the offline and the online.
      </div>
      <div class="quote">
        ‘A humble attempt in trying to understand myself and the world around me through art’
      </div>
      <!-- <div class="line"></div> -->
    </div>

  </div>
</template>


<script>
export default {
  name: 'InfoBox',
  methods: {
    goToPrev() {
      this.$router.go(-1);
    },
    animateOnScroll() {
      this.$gsap.from('.biglogo', {
        y: () => {
          let elH = document.querySelector(".biglogo").offsetHeight
          let windowH = document.querySelector("body").offsetHeight / 2
          let va = windowH - elH
          return va
        },
        delay: 1,
        duration: 1,
        ease: 'Power1.easeInOut',
      })
      this.$gsap.from('.text', {
        opacity: 0,
        delay: 1.8,
        duration: 1,
        ease: 'Power1.easeInOut',
      })
    }
  },
  mounted() {
    this.animateOnScroll()
  },
}
</script>

<style>
.aboutBox {
  width: calc(100vw - (2 * (var(--margin1))) - 10px);
  max-height: 100vh;
  overflow: hidden;
  margin: var(--margin1) !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.text * {
  margin-bottom: .5em;
  width: 50%;
}

.back {
  font-family: "CMU";
  cursor: pointer;
  margin-bottom: calc(var(--margin1)/2);
}

.back:hover {
  text-decoration: underline;
}

.biglogo {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: var(--margin1);
}

.descriptiontext {
  font-family: "CMU";
  width: 38em;
}

.quote {
  font-family: "CMUI";
  width: 38em;
}

.line {
  border-bottom: solid 1.5px black;
  height: var(--margin1);
  width: 100% !important;
}
</style>
