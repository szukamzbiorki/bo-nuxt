<template>
    <div class="modal">
        <WorkDescription :title="title" :size="size" :medium="medium" :description="description" />
        <Workimages :images="imagesGallery"></Workimages>
    </div>
</template>

<script>
export default {
    name: "SingleWorkModal",
    props: {
        title: String,
        size: String,
        medium: String,
        description: String,
        imagesGallery: []
    },
    async created() {
        // this.images = await this.fetchImages()
    },
    computed: {
        // urlOfImg(url) {
        //   return require(url) // the module request
        // }
    }
}

</script>

<style>
.modal {
    position: absolute;
    height: 100vh;
    width: calc(100vw - 240px);
    left: 240px;
    top: 0;
    display: inline-block;
    margin-right: var(--margin1);
}
</style>