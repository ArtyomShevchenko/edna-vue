
<template>
    <div class="toTop">
        <div class="toTop__container">
            <button :class="{ visible: isVisible }" @click="move">
                <slot>
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
                        <path id="XMLID_224_"
                            d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                            l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                            C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" />
                    </svg>
                </slot>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const isVisible = ref(false)

function move() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        isVisible.value = true
    } else {
        isVisible.value = false
    }
})
</script>

<style scoped>
button {
    width: 60px;
    height: 60px;
    opacity: 0;
    position: fixed;
    visibility: hidden;
    bottom: 10px;
    right: calc(50% - 640px);
    z-index: 1;
    transition: opacity .5s;
    padding: 0;
}

button svg {
    width: 40px;
    height: 40px;
    fill: #fff;
}

.visible {
    opacity: 1;
    visibility: visible;
}

@media (max-width: 1300px) {
    button {
        right: 10px;
    }
}

@media(max-width: 600px) {
    .visible {
        display: none
    }
}
</style>