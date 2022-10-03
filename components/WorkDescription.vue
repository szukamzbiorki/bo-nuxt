<template>
  <div class="descriptionBox">
    <p class="worktitle bigtype">
      {{title}}
    </p>
    <p class="size smalltype">
      {{size}}
    </p>
    <p class="medium smalltype">
      {{medium}}
    </p>
    <p class="description smalltype">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    size: String,
    medium: String,
    description: String
  },
  // mounted() {
  //   this.animateOnScroll()
  // },
  // methods: {
  //   animateOnScroll() {
  //     const boxes = this.$gsap.utils.toArray('.singleWork');
  //     const rows = this.$gsap.utils.toArray('.workrow');
  //     boxes.forEach(box => {
  //       this.$gsap.from(box, {
  //         y: -10,
  //         ease: 'Power1.easeInOut',
  //         duration: 2,
  //         scrollTrigger: {
  //           trigger: box,
  //           markers: true,
  //           horizontal: true,
  //           scroller: rows
  //         }
  //       })
  //     })

  //   }
  // }
}
</script>

<style>
.descriptionBox {
  position: sticky;
  left: 0;
  /* flex: 0 0 auto;
  min-width: 300px; */
  display: inline-block;
  height: 50px;
}

.descriptionBox * {
  margin-bottom: .1em;
}

.smalltype {
  font-family: "CMU";
  font-size: 13px;
}

.bigtype {
  font-size: 17px;
}
</style>
