<template>
    <div class="workrow">
        <SingleWork v-for="work in works" :key="work.id" v-bind="work" />
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        works: Array
    }
}
</script>

<style>
.workrow {
    display: block;
    white-space: nowrap;
    height: calc(((100% - 20px) / 2));
    overflow-x: scroll;
    overflow-y: hidden;
    /* scroll-snap-type: x proximity; */
}

.workrow::-webkit-scrollbar {
    display: none;
}
</style>