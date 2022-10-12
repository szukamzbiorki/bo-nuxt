<template>
    <div @click="infoclick" @mouseover="hoverinfo" @mouseleave="hoverinfoleave" class="infobutton">
        INFO
    </div>
</template>

<script>

export default {
    name: "InfoButton",
    methods: {
        hoverinfo: () => {
            var infobox = document.querySelector(".infobox");
            infobox.style.opacity = "100";
        },
        hoverinfoleave: () => {
            var infobox = document.querySelector(".infobox");
            infobox.style.opacity = "0";
        },
        infoclick: () => {
            this.$gsap.to(".infobox", {
                x: -500,
                ease: 'Power1.easeInOut'
            })

        }
    }

}

</script>

<style>
.infobutton {
    position: absolute;
    top: var(--space);
    right: var(--space);
    cursor: pointer;
    z-index: 30;
}
</style>