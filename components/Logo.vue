<template>
    <div class="logo">
        <img class="bologo" src="../static/assets/bologo.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "Logo"
}

</script>

<style>
.logo {
    height: var(--space);
    margin: var(--space) 0 var(--space) var(--space);
}

.bologo {
    height: var(--space);
    width: auto;
}
</style>