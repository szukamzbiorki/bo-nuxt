<template>
  <div class="right">
    <div class="infoBox">
      <router-link to="/1"><img class="bologo" src="../static/assets/bologo.svg" alt=""></router-link>
      <div class="menubox">
        <router-link to="/info">
          <div class="info">INFO</div>
        </router-link>
        <router-link to="/info">
          <div class="bio">BIO</div>
        </router-link>
        <router-link to="/info">
          <div class="contact">CONTACT</div>
        </router-link>
      </div>
      <div class="menubox">
        <router-link to="/1">
          <div class="workclick">WORK</div>
        </router-link>
        <router-link to="/bio">
          <div class="workclick">SERIES</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style>
a {
  padding: 0 !important;
}

.right {
  max-width: 200px;
  height: 100vh;
  /* background-color: blue; */
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
}

.infoBox {
  position: absolute;
  top: var(--margin1);
  max-width: 200px;
  height: auto;
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  /* padding: 12px; */
  margin-left: var(--margin1);
  margin-bottom: var(--margin1);
  padding-right: var(--margin1);
  /* align-self: flex-end; */
}

.infoBox * {
  width: -webkit-fit-content;
  margin-left: 0;
  margin-right: 0;
  text-align: right;
}

.info {
  background-color: lightgreen;
}

.bio {
  background-color: lightgrey;
}

.contact {
  background-color: pink;
}

.bologo {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.menubox {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  justify-content: space-between;
  margin-bottom: calc(var(--margin1) / 2);

}

.menubox * {
  padding: var(--paddingright);
  padding-top: var(--paddingright2);
  padding-bottom: var(--paddingright2);
  border: 0;
}

.workclick {
  border: 1px black solid;
  background-color: white !important;
}
</style>
