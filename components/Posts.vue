<template>
    <div class="workcolumn">
        <SingleWork v-for="work in works" :key="work.id" v-bind="work" />
    </div>
</template>

<script>

export default {
    name: "Posts",
    data() {
        return {}
    },
    props: {
        works: Array
    }
}
</script>

<style>
.workcolumn {
    display: block;
    white-space: nowrap;
    width: calc(60vw - 2*var(--space));
    overflow-x: hidden;
    /* transition: height 0.4s ease-out, opacity 0.2s ease-out; */
}

.workrow::-webkit-scrollbar {
    display: none;
}

@media screen and (max-width: 820px) {
    .workcolumn {
        width: calc(100vw - 2*var(--space)) !important;
    }
}
</style>