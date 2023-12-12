<template>
    <section class="greeting">
        <div class="greeting__container">
            <div class="greeting__wrapper">
                <div class="greeting-content" v-if="langStore.lang === 'en'">
                    <div class="greeting-img-container">
                        <img class="greeting-img" :src="getImageUrl('img1', 'jpg')" alt="Girl">
                    </div>
                    <div class="greeting-body">
                        <h2 class="greeting-title">I help high value woman manifest
                            themselves
                            through
                            style.
                        </h2>

                        <button class="greeting-button">book now</button>
                    </div>
                </div>

                <div class="greeting-content" v-if="langStore.lang === 'ua'">
                    <div class="greeting-img-container">
                        <img class="greeting-img" :src="getImageUrl('img1', 'jpg')" alt="Girl">
                    </div>
                    <div class="greeting-body">
                        <h2 class="greeting-title">Я допомагаю високоцінним жінкам проявити себе через стиль.
                        </h2>

                        <button class="greeting-button">Зарезервувати</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLangStore } from "@/store/lang"
const langStore = useLangStore()

function getImageUrl(name, ext) {
    return new URL(`../assets/images/${name}.${ext}`, import.meta.url).href
}
</script>

<style>
.greeting-body {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.greeting__container {
    padding: 0;
}

.greeting__wrapper {}

.greeting-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    gap: 16px;
}

.greeting-img-container {}

.greeting-img {}

.content {}

.greeting-body {}

.greeting-title {}

.title {}

.greeting-img-container {
    width: 50%;
    max-height: 587px;
    overflow: hidden;
}

.greeting-img {
    display: block;
    margin: 0 auto;
    max-width: 407px;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.greeting-button {
    align-self: flex-end
}

@media (max-width: 768px) {


    .greeting-content {
        display: block;
    }

    .greeting h2 {}

    .greeting-img-container,
    .greeting-img {
        width: 100%;
    }

    .greeting-img-container {
        float: right;
        width: 50%;
        height: 50%;
        shape-outside: margin-box;
        background-color: Green;
        color: white;
        margin-bottom: 40px;
        margin-left: 10px;
    }

    .greeting-img {
        width: 100%;
        height: 100%;
        object-position: top;
        object-fit: cover;
    }

    .greeting-body {
        display: block;
        width: 100%;
        padding-top: 200px;
        padding-bottom: 40px;
    }

    .greeting-button {
        padding-left: 10px;
        padding-right: 10px;
        width: 90%;
        align-self: center;
        margin: 40px auto 0px;
    }

    .greeting-title {
        margin-left: 16px;
    }
}

@media (max-width: 550px) {
    .greeting-img-container {
        float: right;
        width: 50%;
        height: 50%;
        shape-outside: margin-box;
        margin-bottom: 0;
    }
}
</style>