<template>
    <div @click="infoclick" @mouseover="hoverinfo" @mouseleave="hoverinfoleave" class="infobutton">
        INFO
    </div>
</template>

<script>
export default {
    name: "InfoButton",
    methods: {
        hoverinfo() {
            var infobox = document.querySelector(".infobox");
            // infobox.style.opacity = "100";
        },
        hoverinfoleave() {
            var infobox = document.querySelector(".infobox");
            // infobox.style.opacity = "0";
        },
        infoclick() {
            var infobox = document.querySelector(".infobox");
            var infobutton = document.querySelector(".infobutton");
            infobox.classList.toggle("active");
            infobutton.classList.toggle("moved");
        }
    }

}

</script>

<style>
.infobutton {
    vertical-align: middle;
    padding: calc(var(--space) - 1px);
    cursor: pointer;
    z-index: 30;
    opacity: 100 !important;
    background-color: #ffffff;
}
</style>