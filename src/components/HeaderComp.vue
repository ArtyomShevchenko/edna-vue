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
                                <RouterLink to="/fashion" v-on:click="checked = !checked">Fashion styling</RouterLink>
                                <a href="https://www.instagram.com/" target="_blank">instagram icon</a>
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
    font-family: "HelveticaNeue";
    /*font-size: 10px;*/
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    transition: color .2s;
}

.menu .menu-items a:hover {
    color: var(--edna-dark-red, #B31719);
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
}

.menu input[type="checkbox"]:checked~.shadow {
    opacity: .4;
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
</style>