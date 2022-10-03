<template>
    <div class="workrow">
        <SingleWork @click.native="singleWorkToggle" v-for="work in works" :key="work.id" v-bind="work" />
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
        singleWorkToggle(event) {
            let clickedNode = event.currentTarget
            let parent = clickedNode.parentElement
            let parentSibling = this.getSibling(parent)
            let close = document.querySelector(".close")
            let siblings = this.getAllSiblings(clickedNode)

            if (clickedNode.classList.contains("focused")) {
                return
            } else {

                siblings.forEach(element => {
                    element.style.opacity = "0"
                });
                parentSibling.style.opacity = "0"

                close.style.opacity = "100"

                parent.style.height = "calc(100%)"
                parentSibling.style.height = "0"
                parent.style.marginBottom = "0"
                parentSibling.style.marginBottom = "0"
            }

            close.style.opacity = "100"


            let currentScroll = parent.scrollLeft
            this.scrollToElement(clickedNode, parent)


            clickedNode.classList.toggle("focused")
        },
        getSibling(clickedNode) {
            // create an empty array
            let element

            // first child of the parent node
            let index = clickedNode.parentNode.firstElementChild;

            if (index != clickedNode) {
                element = index
            } else {
                element = index.nextElementSibling
            }

            return element;
        },
        getAllSiblings(clickedNode) {
            // create an empty array
            let siblings = [];

            // if no parent, return empty list
            if (!clickedNode.parentNode) {
                return siblings;
            }

            // first child of the parent node
            let sibling = clickedNode.parentNode.firstElementChild;

            // loop through next siblings until `null`
            do {
                // push sibling to array
                if (sibling != clickedNode) {
                    siblings.push(sibling);
                }
            } while (sibling = sibling.nextElementSibling);

            return siblings;
        },
        scrollToElement(element, parent) {
            let endPosition = element.offsetLeft - 240;

            let dX = 0.3 * (endPosition - parent.scrollLeft);
            let nextX = parent.scrollLeft + dX;

            parent.scrollTo(nextX, 0);

            if (Math.abs(parent.scrollLeft - endPosition) >= 0.5) {
                window.requestAnimationFrame(() => {
                    this.scrollToElement(element, parent);
                });
            } else {
                // jump to endposition
                parent.scrollTo(endPosition, 0);

                // store scrollLeft in parent data-scrollleft
                parent.dataset.scrollleft = parent.scrollLeft;

                let siblings = this.getAllSiblings(element)
                siblings.forEach(element => {
                    element.style.display = "none"
                });
            }
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
    transition: height 0.4s ease-out, opacity 0.2s ease-out;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: 0;
    cursor: pointer;
    z-index: 1000;
}

.workrow::-webkit-scrollbar {
    display: none;
}
</style>