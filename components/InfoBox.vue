<template>
<div class="aboutBox">
  <div class="text">
    <div class="title">Bo Deurloo (b. 1999, The Hague)</div>
    <div class="descriptiontext">
      As an artist born in the time of the internet and mass media, Bo derives his inspiration from the two spaces in our contemporary times exist in. The offline and the online. As a teenager, he spent most of his time on the online side of living,
      giving himself the freedom to explore interests and create friendships from all over the world on the web, but with the loss of the real world. With his interest and work with and in art, he realizes the impact of the online world on the real
      world around us. The aim of creating an artwork is to create a visual trigger. Something in your eyesight that makes you shift from rationality to reality. This shift is what I try to embody with my work, in any way possible. This effect is
      closely related to Koan zen riddles. The form of the works often is mystic, absurd, open narrative, and abstract. Assembling parts from the offline and the online.
    </div>
    <div class="quote">
      ‘A humble attempt in trying to understand myself and the world around me through art’
    </div>
    <!-- <div class="line"></div> -->
  </div>
  <img class="biglogo" src="../static/assets/logorender.png" alt="">
</div>
</template>


<script>
export default {
  name: 'InfoBox'
}
</script>

<style>
.aboutBox {
  width: auto;
  max-height: 100vh;
  grid-column: 1 / 3;
  overflow: hidden;
  margin: var(--margin1) !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  /* background-color: grey; */
}

.biglogo {
  width: 100%;
  margin-top: var(--margin1);

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
