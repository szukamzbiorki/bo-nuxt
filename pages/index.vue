<template>
<div class="wrapper">
<Menu :menu="data"></Menu>
 <NuxtChild  />
 <Right/>
</div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>

<style scoped>
:root {
  --margin1: 20px;
  --white: #ffffff;
  --paddingright: 6px;
  --paddingright2: 1px;
}

@font-face {
  font-family: 'VAG';
  src: url("../static/assets/VAG Rounded Next SemiBold.ttf") format('truetype');
}

@font-face {
  font-family: 'CMU';
  src: url("../static/assets/cmu.ttf") format('truetype');
}

@font-face {
  font-family: 'CMUI';
  src: url("../static/assets/cmui.ttf") format('truetype');
}

@font-face {
  font-family: 'DiGrotesk';
  src: url("../static/assets/DiGrotesk-Regular.ttf") format('truetype');
}

@font-face {
  font-family: 'Diatype';
  src: url("../static/assets/ABCDiatypeSemi-Mono-Regular.otf") format('opentype');
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

body * {
  padding: 0;
  margin: 0;
  font-family: 'VAG';
  letter-spacing: .075em;
  line-height: 1.1em;
}

a {
  color: black !important;
  text-decoration: none !important;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 1fr;
}
</style>
