<template>
    <section class="blog" v-if="langStrore.lang === 'en'">
        <div class="blog__container">
            <div class="blog__wrapper">
                <h3 class="title">Blog</h3>
            </div>
            <div class="blog__content--wrapper">
                <div class="blog__images-container">

                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-1.jpg" class="blog__image" alt="Image">
                    </div>

                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-2.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-3.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-4.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-5.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-6.jpg" class="blog__image" alt="Image">
                    </div>
                </div>
                <div class="blog__body">
                    <h2 class="blog__title">sustainable & mindful wardrobe</h2>
                    <div>
                        <p class="blog__text">Join my community & let’s explore meaningful topics of conscious fashion
                            and
                            styling together.
                        </p>

                        <router-link to="/blog">
                            <button class="blog__button">explore more</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="blog" v-if="langStrore.lang === 'ua'">
        <div class="blog__container">
            <div class="blog__wrapper">
                <h3 class="title">Блог</h3>
            </div>
            <div class="blog__content--wrapper">
                <div class="blog__images-container">

                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-1.jpg" class="blog__image" alt="Image">
                    </div>

                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-2.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-3.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-4.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-5.jpg" class="blog__image" alt="Image">
                    </div>
                    <div class="blog__image-container">
                        <img src="../assets/images/blog-title-6.jpg" class="blog__image" alt="Image">
                    </div>
                </div>
                <div class="blog__body">
                    <h2 class="blog__title">стійкий і розумний гардероб</h2>
                    <div>
                        <p class="blog__text">Приєднуйтесь до моєї спільноти та вивчимо змістовні теми свідомої моди
                            і
                            стиль разом.
                        </p>

                        <router-link to="/blog">
                            <button class="blog__button">вивчити більше</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <div class="array-to-top">
        <div class="array-to-top__container">
            <div class="array-to-top__wrapper">
                <div class="array-to-top__content">
                    <div class="array-to-top__body" v-on:click="scrolltoTop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 17V1" stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 9L9 1L17 9" stroke="#B31719" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLangStore } from "../store/lang"
const langStrore = useLangStore()

function scrolltoTop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}
</script>

<style scoped>
.array-to-top {}

.array-to-top__container {
    padding-top: 30px;
    padding-bottom: 30px;
}

.array-to-top__wrapper {}

.array-to-top__content {
    display: flex;
    justify-content: flex-end;
}

.array-to-top__body {
    padding: 10px;
    transform: translateX(10px);
    cursor: pointer;
}






/*------------*/
.blog {}

.blog__container {
    padding: 0;
}

.blog__wrapper {}

.title {
    margin-bottom: 80px;
}

.blog__title {
    text-align: end;
}

.blog__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-top: 80px;
}

.blog__images-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    width: 100%;
    max-width: 780px;
}

.blog__image-container {
    /*max-width: 210px;
    max-height: 210px;*/
    height: 100%;
    aspect-ratio: 1/1;
}

.blog__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 80px;
}

.blog__body>div {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
}

.blog__text {
    max-width: 236px;
}

.blog__button {}









.blog__content--wrapper {
    display: grid;
    grid-template-columns:
        minmax(0, 1fr) minmax(10px, 650px) minmax(0, 650px) minmax(0, 1fr);
    margin-inline: auto;
}

.blog__images-container {
    grid-column: span 2;
    padding-right: 80px;
    align-self: flex-end;
    margin-left: auto;
    align-self: center;
}

.blog__body {
    grid-column: 3/4
}

@media(max-width: 1100px) {
    .blog__images-container {
        padding-right: 40px;
    }

    .blog__body {
        gap: 40px;
    }

    .title {
        margin-inline: 16px;
    }
}

@media (max-width: 850px) {
    .blog__content--wrapper {
        display: grid;
        grid-template-columns: 16px 1fr 16px;
        grid-gap: 32px 0;
    }

    .blog__images-container {
        padding: 0;
        grid-column: span 3;
    }

    .blog__body {
        grid-column: 2/3;
    }

    .blog__body>div {
        flex-direction: column;
    }

    .blog__title {
        text-align: start;
        align-self: flex-start;
    }

    .blog__button {
        width: 100%;
        background-color: transparent;
        border: 1px solid var(--edna-brown, #2D1B0D);
        color: var(--edna-dark-brown, #210803);
    }

    .blog__text {
        max-width: 100%;
    }

    .blog__container {
        padding-bottom: 32px;
    }
}
</style>