<template>
    <div class="lang">
        <div class="leng__container">
            <div class="lang__button" @click="handleChange">
                {{ store.lang === "en" ? "ua" : "en" }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLangStore } from "@/store/lang"
const store = useLangStore()

function buttonText() {
    if (store.lang === "en") {
        store.lang = "ua"
    } else {
        store.lang = "en"
    }
}

function handleChange() {
    buttonText()
}

</script>

<style scoped>
.leng {
    justify-self: flex-start;
}

.leng__container {
    padding: 0;
    margin-inline: 10px;
}

.lang__button {
    padding: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;
    transition: color .2s;
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-style: normal;
    font-weight: 500 !important;
}

.lang__button:hover {
    color: var(--edna-dark-red, #B31719);
}
</style>