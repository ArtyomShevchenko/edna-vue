<script setup>
import { ref } from "vue"
import LogoComp from "./LogoComp.vue"

const checked = ref(false)
</script>

<template>
    <header>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <LogoComp />
                    <nav class="menu">
                        <input type="checkbox" name="" id="" ref="checkbox" v-model="checked">
                        <div class="burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="menu-items">
                            <div class="box">
                                <RouterLink to="/about" v-on:click="checked = !checked">About</RouterLink>
                                <RouterLink to="/approach" v-on:click="checked = !checked">Approach</RouterLink>
                                <RouterLink to="/" v-on:click="checked = !checked">Home</RouterLink>
                                <RouterLink to="/services" v-on:click="checked = !checked">services</RouterLink>
                                <RouterLink to="/testimonials" v-on:click="checked = !checked">testimonials</RouterLink>
                                <RouterLink to="/contact" v-on:click="checked = !checked">Contact</RouterLink>
                                <RouterLink to="/blog" v-on:click="checked = !checked">Blog</RouterLink>
                                <RouterLink to="/fashion" v-on:click="checked = !checked" class="mark">Fashion styling
                                </RouterLink>
                                <a href="https://www.instagram.com/" target="_blank" >
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
                        <div class="shadow" v-on:click="checked = !checked"></div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.container {
    padding: 48px 0 40px 0;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

/* burger */

.menu {
    width: 24px;
    height: 24px;
    position: relative;
}

.menu input[type="checkbox"] {
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

.menu .burger {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: block;
    width: 18px;
    height: 14px;
}

.menu .burger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    transition: all .3s;
}

.menu .burger span:nth-child(1) {
    top: 0%;
}

.menu .burger span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
}

.menu .burger span:nth-child(3) {
    top: 100%;
    transform: translateY(-100%);
}

.menu .menu-items {
    background-color: #fff;
    padding: 80px 40px 40px 80px;
    width: 40%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    transform: translateX(100%);
    transition: transform .4s ease-in-out;
    display: flex;
    justify-content: flex-end;
}

.menu .menu-items .box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
}

.menu .menu-items a {
    padding: 6px 12px;
    color: var(--edna-dark-beige, #8F7D65);
    /* color: var(--edna-dark-red, #B31719); */
    font-family: "Helvetica Neue";
    /*font-size: 10px;*/
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    transition: color .2s;
}

.menu .menu-items .mark {
    color: var(--edna-dark-red, #B31719);
}

.menu .menu-items a:hover {
    color: var(--edna-brown, #2D1B0D);
}

.menu .shadow {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    opacity: 0;
    transition: opacity .3s;
    pointer-events: none !important;
}

.menu input[type="checkbox"]:checked~.shadow {
    opacity: .4;
    pointer-events: auto !important;
}

.menu input[type="checkbox"]:checked~.menu-items {
    transform: translateX(0%);
}

.menu input[type="checkbox"]:checked~.burger span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}

.menu input[type="checkbox"]:checked~.burger span:nth-child(2) {
    transform: translateY(-50%) rotateY(90deg);
}

.menu input[type="checkbox"]:checked~.burger span:nth-child(3) {
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
}

@media(max-width: 768px) {
    .menu .shadow {
        display: none;
    }

    .menu .menu-items {
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
    }

    .menu .menu-items .box {
        align-items: center;
        overflow:auto;
        width: 100%;
    }
}
</style>