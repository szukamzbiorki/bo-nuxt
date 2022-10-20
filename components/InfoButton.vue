<template>
    <div @click="infoclick" class="infobutton">
        <div class="info">INFO</div>
        <div class="close">CLOSE</div>

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
            var infobutton1 = document.querySelector(".close");
            var infobutton2 = document.querySelector(".info");
            infobox.classList.toggle("active");
            infobutton.classList.toggle("movedinfo");
            infobutton1.classList.toggle("moved");
            infobutton2.classList.toggle("moved");
        }
    }

}

</script>

<style>
.infobutton {
    vertical-align: middle;
    cursor: pointer;
    z-index: 30;
    opacity: 100 !important;
    background-color: #ffffff;
    overflow: hidden;
    max-height: 39px;
    min-width: 65px;
}

.infobutton>div {
    transition: all .3s ease-in-out;
}

.moved {
    transform: translateY(-39px);
}

.movedinfo {
    width: 70px;
}

.info {
    height: auto;
    width: 70px;
    padding-left: calc(var(--space) - 1px);
    padding-right: calc(var(--space) - 1px);
    padding-top: calc(var(--space));
    padding-bottom: calc(var(--space) - 2px);
}

.close {
    height: auto;
    max-width: 70px;
    padding-left: calc(var(--space) - 1px);
    padding-right: calc(var(--space) - 1px);
    padding-top: calc(var(--space) + 1px);
    padding-bottom: calc(var(--space) - 3px);
}
</style>