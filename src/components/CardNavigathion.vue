<template>
    <nav class="card__nav" ref="navContainer" v-if="langStore.lang === 'en'">
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/guided-shopping">GUIDED SHOPPING</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/style-session">STYLE SESSION</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/wardrobe-edit">WARDROBE EDIT</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/special-styling">SPECIAL STYLING</router-link>
        </li>

        <li class="card__nav-item card__nav-item--cross card__nav-item--active">
            <ButtonCrossToBack />
        </li>
    </nav>

    <nav class="card__nav" ref="navContainer" v-if="langStore.lang === 'ua'">
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/guided-shopping" title="Керовані покупки">Керовані
                покупки</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/style-session" title="Сесія стилю">Сесія стилю</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/wardrobe-edit" title="Редагування гардеробу">Редагування
                гардеробу</router-link>
        </li>
        <li class="card__nav-item">
            <router-link class="card__nav-link" to="/services/special-styling" title="Спеціальний стиль">Спеціальний
                стиль</router-link>
        </li>

        <li class="card__nav-item card__nav-item--cross card__nav-item--active">
            <ButtonCrossToBack title="На домашню сторінку" />
        </li>
    </nav>
</template>

<script setup>
import ButtonCrossToBack from "@/components/ButtonCrossToBack.vue"
import { ref, onMounted } from "vue"

import { useLangStore } from '../store/lang'
const langStore = useLangStore()

const navContainer = ref(null)
onMounted(() => {
    for (let item of navContainer.value.children) {
        if (item.children[0].href == window.location.href.toString()) {
            item.classList.add("card__nav-item--active")
            item.querySelector(".card__nav-link").classList.add("card__nav-link--active")
        }
    }
})
</script>

<style scoped>
.card__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
}

.card__nav-item {}

.card__nav-item--hidden {
    display: none;
}

.card__nav-link {
    white-space: nowrap;
    text-transform: uppercase;
    color: var(--edna-dark-beige, #8F7D65);

    /* 8_Not Active Link */
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: uppercase;
}

.router-link-active {
    color: var(--edna-dark-red, #B31719);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-decoration-line: underline;
    text-transform: uppercase;
}

.card__nav-item--cross {
    height: 32px;
    width: 32px;
    margin-left: auto;
}

@media(max-width: 768px) {
    .card__nav {
        padding-left: 16px;
        padding-right: 16px;
    }

    .card__nav-item {
        display: none;
    }

    .card__nav-item--active {
        display: block;
    }
}
</style>