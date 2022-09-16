<template>
    <div class="workrow" @click.capture="resize" @scroll="console">
        <SingleWork @click="cipa" v-for="work in works" :key="work.id" v-bind="work" />
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
    },
    methods: {
        resize(event) {
            let el = event.currentTarget
            let elsibling
            if (el.classList.contains("1")) {
                elsibling = el.nextElementSibling
                console.log(el)
                console.log(elsibling)
            } else {
                elsibling = el.previousElementSibling
                console.log(el)
                console.log(elsibling)
                // elsibling.style.marginBottom = "0"
            }
            // console.log(el)
            // elsibling = el.nextElementSibling
            // console.log(elsibling)

            if (el.classList.contains("big") && el.classList.contains("1")) {
                el.style.height = "calc(((100% - 20px) / 2))"
                elsibling.style.height = "calc(((100% - 20px) / 2))"
                el.style.marginBottom = "20px"
                elsibling.style.marginBottom = "0"
            } else if (el.classList.contains("big")) {
                el.style.height = "calc(((100% - 20px) / 2))"
                elsibling.style.height = "calc(((100% - 20px) / 2))"
                el.style.marginBottom = "0"
                elsibling.style.marginBottom = "20px"
            }
            else {
                el.style.height = "calc(100%)"
                elsibling.style.height = "0"
                el.style.marginBottom = "0"
                elsibling.style.marginBottom = "0"
            }

            el.classList.toggle("big")

            // console.log(el.scrollLeft)
            // console.log(el.offsetLeft)
            // console.log(el.pageXOffset)
            // console.log('this is a nice resize!!')
        },
        console(event) {
            let dupa = event.currentTarget
            console.log(dupa.offsetLeft)
        },
        cipa(event) {
            let cipa = event.currentTarget
            console.log(cipa.offsetLeft)
        }
    }
}
</script>

<style>
.workrow {
    display: block;
    white-space: nowrap;
    height: calc(((100% - 20px) / 2));
    overflow: scroll;
    transition: height 0.4s;
    transition-timing-function: ease-out;
}

.rezise_toprow {
    animation-name: resize;
    animation-duration: .5s;
    animation-timing-function: ease-out;
}

.workrow::-webkit-scrollbar {
    display: none;
}

@keyframes resize {
    from {
        height: calc(((100% - 20px) / 2));
    }

    to {
        height: calc((200%));
    }
}
</style>