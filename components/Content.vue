<template>
  <div class="mainContainer">
    <div class="container">
      <Posts class="1" :works="evenPosts" />
      <Posts class="2" :works="oddPosts" />
      <div @click="singleWorkBack" class="close">X</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    works: Array
  },
  computed: {
    evenPosts() {
      return this.works.filter((post, index) => index % 2 === 0);
    },
    oddPosts() {
      return this.works.filter((post, index) => index % 2 !== 0);
    },
  },
  methods: {
    singleWorkBack() {
      let clickedNode = document.querySelector(".focused")
      let parent = clickedNode.parentElement
      let parentSibling = this.getSibling(parent)
      let close = document.querySelector(".close")
      let siblings = this.getAllSiblings(clickedNode)

      siblings.forEach(element => {
        element.style.opacity = "100"
      });
      parentSibling.style.opacity = "100"

      if (clickedNode) {
        close.style.opacity = "0"
      }

      if (parent.classList.contains("1")) {
        parent.style.height = "calc(((100% - 20px) / 2))"
        parentSibling.style.height = "calc(((100% - 20px) / 2))"
        parent.style.marginBottom = "20px"
        parentSibling.style.marginBottom = "0"
      } else {
        parent.style.height = "calc(((100% - 20px) / 2))"
        parentSibling.style.height = "calc(((100% - 20px) / 2))"
        parent.style.marginBottom = "0"
        parentSibling.style.marginBottom = "20px"
      }



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
    }
  }
}
</script>


<style scope>
.mainContainer {
  width: auto;
  max-height: 100vh;
  grid-column: 2 / 4;
  overflow: hidden;
  margin: var(--margin1);
  margin-left: 0;
}

.container {
  width: auto;
  height: 100%;
  display: block;
  overflow: hidden;
  /* padding-left: var(--margin1); */
  padding-left: 0;
}

.container>.workrow:nth-child(1) {
  margin-bottom: 20px;
}

.container::-webkit-scrollbar {
  display: none;
}

/* .container *:not(:last-child) {
  margin-right: var(--margin1);
} */
</style>
