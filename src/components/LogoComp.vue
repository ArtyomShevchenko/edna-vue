<template>
    <div class="logo">
        <slot>
            EDNA
        </slot>
    </div>
</template>

<script setup>
</script>


<style scoped>
.logo {
    color: var(--edna-brown, #2D1B0D);
    font-family: "Cormorant Garamond";
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    /* letter-spacing: -2px; */
    text-transform: uppercase;
    height: 32px;
}

@media(max-width: 768px) {
    .logo {
        position: relative;
        z-index: 20;
    }
}
</style>