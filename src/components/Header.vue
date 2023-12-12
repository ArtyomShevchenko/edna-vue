<template>
    <header class="header">
        <div class="header__container">
            <div class="header__wrapper">
                <div class="header-content">
                    <LogoComp class="LogoComp" />
                    <ChangeLangButton />

                    <nav class="menu">
                        <input class="burget-input" type="checkbox" name="" id="" ref="checkbox" v-model="checked">
                        <div class="burger-icon">
                            <span class="burger-icon__line1 burger-icon__line"></span>
                            <span class="burger-icon__line2 burger-icon__line"></span>
                            <span class="burger-icon__line3 burger-icon__line"></span>
                        </div>



                        <div class="menu-body" v-if="langStore.lang === 'en'">
                            <div class="menu-links">
                                <RouterLink class="menu-link" to="/about" v-on:click="checked = !checked">About</RouterLink>
                                <RouterLink class="menu-link" to="/approach" v-on:click="checked = !checked">Approach
                                </RouterLink>
                                <RouterLink class="menu-link" to="/" v-on:click="checked = !checked">Home</RouterLink>
                                <RouterLink class="menu-link" to="/services" v-on:click="checked = !checked">services
                                </RouterLink>
                                <RouterLink class="menu-link" to="/testimonials" v-on:click="checked = !checked">
                                    testimonials</RouterLink>
                                <RouterLink class="menu-link" to="/contact" v-on:click="checked = !checked">Contact
                                </RouterLink>
                                <RouterLink class="menu-link" to="/blog" v-on:click="checked = !checked">Blog</RouterLink>
                                <RouterLink class="menu-link menu-link__mark" to="/fashion" v-on:click="checked = !checked">
                                    Fashion styling
                                </RouterLink>
                                <a class="menu-link menu-link__mark" href="https://www.instagram.com/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <g clip-path="url(#clip0_1468_3671)">
                                            <path
                                                d="M11.3335 1.33333H4.66683C2.82588 1.33333 1.3335 2.82571 1.3335 4.66666V11.3333C1.3335 13.1743 2.82588 14.6667 4.66683 14.6667H11.3335C13.1744 14.6667 14.6668 13.1743 14.6668 11.3333V4.66666C14.6668 2.82571 13.1744 1.33333 11.3335 1.33333Z"
                                                stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M10.6668 7.58C10.7491 8.13483 10.6543 8.70148 10.396 9.19935C10.1376 9.69721 9.72889 10.1009 9.22788 10.3531C8.72687 10.6053 8.1591 10.6931 7.60532 10.604C7.05155 10.5148 6.53997 10.2534 6.14336 9.85678C5.74674 9.46016 5.48528 8.94859 5.39618 8.39481C5.30707 7.84104 5.39484 7.27327 5.64701 6.77225C5.89919 6.27124 6.30292 5.8625 6.80079 5.60416C7.29865 5.34583 7.8653 5.25106 8.42013 5.33334C8.98608 5.41726 9.51003 5.68098 9.91459 6.08554C10.3192 6.4901 10.5829 7.01405 10.6668 7.58Z"
                                                stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.6665 4.33333H11.6732" stroke="#B31719" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1468_3671">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="menu-body" v-if="langStore.lang === 'ua'">
                            <div class="menu-links">
                                <RouterLink class="menu-link" to="/about" v-on:click="checked = !checked">Про нас
                                </RouterLink>
                                <RouterLink class="menu-link" to="/approach" v-on:click="checked = !checked">Підход до
                                    клієнта
                                </RouterLink>
                                <RouterLink class="menu-link" to="/" v-on:click="checked = !checked">На головну сторінку
                                </RouterLink>
                                <RouterLink class="menu-link" to="/services" v-on:click="checked = !checked">послуги
                                </RouterLink>
                                <RouterLink class="menu-link" to="/testimonials" v-on:click="checked = !checked">
                                    відгуки</RouterLink>
                                <RouterLink class="menu-link" to="/contact" v-on:click="checked = !checked">Контакт
                                </RouterLink>
                                <RouterLink class="menu-link" to="/blog" v-on:click="checked = !checked">Блог</RouterLink>
                                <RouterLink class="menu-link menu-link__mark" to="/fashion" v-on:click="checked = !checked">
                                    Модна укладка
                                </RouterLink>
                                <a class="menu-link menu-link__mark" href="https://www.instagram.com/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none">
                                        <g clip-path="url(#clip0_1468_3671)">
                                            <path
                                                d="M11.3335 1.33333H4.66683C2.82588 1.33333 1.3335 2.82571 1.3335 4.66666V11.3333C1.3335 13.1743 2.82588 14.6667 4.66683 14.6667H11.3335C13.1744 14.6667 14.6668 13.1743 14.6668 11.3333V4.66666C14.6668 2.82571 13.1744 1.33333 11.3335 1.33333Z"
                                                stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M10.6668 7.58C10.7491 8.13483 10.6543 8.70148 10.396 9.19935C10.1376 9.69721 9.72889 10.1009 9.22788 10.3531C8.72687 10.6053 8.1591 10.6931 7.60532 10.604C7.05155 10.5148 6.53997 10.2534 6.14336 9.85678C5.74674 9.46016 5.48528 8.94859 5.39618 8.39481C5.30707 7.84104 5.39484 7.27327 5.64701 6.77225C5.89919 6.27124 6.30292 5.8625 6.80079 5.60416C7.29865 5.34583 7.8653 5.25106 8.42013 5.33334C8.98608 5.41726 9.51003 5.68098 9.91459 6.08554C10.3192 6.4901 10.5829 7.01405 10.6668 7.58Z"
                                                stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.6665 4.33333H11.6732" stroke="#B31719" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1468_3671">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="navigation-shadow" v-on:click="checked = !checked"></div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from "vue"
import LogoComp from "@/components/LogoComp.vue"
import ChangeLangButton from "@/components/ChangeLangButton.vue"
import { useLangStore } from "@/store/lang";
const langStore = useLangStore()

const checked = ref(false)

watch(checked, (newChecked) => {
    const body = document.querySelector("body")
    newChecked
        ? body.classList.add("disable-scroll")
        : body.classList.remove("disable-scroll")


    // window.onscroll = function () { window.scrollTo(0, 0); }; //disable scroll
    // window.onscroll = function () { }; //eneble scroll
})
</script>

<style scoped>
.header__container {
    padding: 48px 0 40px 0;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.LogoComp {
    margin-right: auto;
}

/* burger */

.menu {
    width: 24px;
    height: 24px;
    position: relative;
}

.burget-input {
    display: block;
    width: 24px;
    height: 24px;
    opacity: 0;
    position: absolute;
    top: 0;

    z-index: 11;
    opacity: 0;
    cursor: pointer;
}

.burger-icon {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: block;
    width: 18px;
    height: 14px;
}

.burger-icon__line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    transition: all .1s;
}

.burger-icon__line1 {
    top: 0%;
}

.burger-icon__line2 {
    top: 50%;
    transform: translateY(-50%);
}

.burger-icon__line3 {
    top: 100%;
    transform: translateY(-100%);
}

.menu-body {
    padding: 100px 0px 40px 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    transform: translateX(100%);
    transition: transform .4s ease-in-out;
    background: linear-gradient(90deg, transparent 50%, #fff 50%);
    display: grid;
    grid-template-columns: 1fr calc(var(--wrapper-width)/2) calc(var(--wrapper-width)/2) 1fr;
}

.menu-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    padding-right: 0;
    grid-column: 3/ 4;
}

.menu-link {
    padding: 6px 12px;
    color: var(--edna-dark-beige, #8F7D65);
    /* color: var(--edna-dark-red, #B31719); */
    font-family: "Helvetica Neue";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    transition: color .2s;
}

.menu-link:hover {
    color: var(--edna-brown, #2D1B0D);
}

*[class*="__mark"] {
    color: var(--edna-dark-red, #B31719);
}

*[class*="__mark"]:hover {
    color: var(--edna-dark-red, #2D1B0D);
}

.navigation-shadow {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 0;
    transition: opacity .2s ease .3s;
    /*pointer-events: none !important; */
    visibility: hidden
}

.burget-input:checked~.navigation-shadow {
    opacity: .3;
    visibility: visible;
}

.burget-input:checked~.menu-body {
    transform: translateX(0);
}

.burget-input:checked~.menu-links {
    padding-right: calc(100% - 570px);
}

.burget-input:checked~.burger-icon>.burger-icon__line1 {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.burget-input:checked~.burger-icon>.burger-icon__line2 {
    transform: translateY(-50%) rotateY(90deg);
}

.burget-input:checked~.burger-icon>.burger-icon__line3 {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
}

@media(max-width: 768px) {

    .header__container {
        padding-left: 16px;
        padding-right: 16px;
    }

    .navigation-shadow {
        display: none;
    }

    .menu-body {
        padding: 120px 0px 20px 0px;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        transform: translateX(100%);
        transition: transform .4s ease-in-out;
        display: flex;
        justify-content: center;
        background: #fff;
    }

    .menu-links {
        align-items: center;
        overflow: auto;
        width: 100%;
    }

    .burget-input:checked~.menu-body .menu-links {
        padding-right: 0;
    }
}
</style>