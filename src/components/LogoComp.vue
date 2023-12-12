<template>
    <div class="logo">
        <slot>
            EDNA
        </slot>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import intersectionEntry from "@/observers/intersectionEntry";

const { observedElement, elementClass, interOptions, interCallback, observer } =
    intersectionEntry();
onMounted(() => {
    observedElement.value = document.querySelector(".logo");
    elementClass.value = "visible";
    interOptions(null, 1);
    interCallback();
    observer.observe(observedElement.value);
});
</script>


<style scoped>
.logo {
    color: var(--edna-brown, #2D1B0D);
    font-family: "Cormorant Garamond";
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: -2px;
    text-transform: uppercase;
    height: 32px;

    transform: translateX(-100%);
    opacity: 0;
    transition: all 1s ease;
}

@media(max-width: 768px) {
    .logo {
        position: relative;
        z-index: 20;
    }
}

.visible {
    transform: translateX(-0);
    opacity: 1;
}
</style>