<template>
    <section class="blog">
        <div class="blog__container">
            <div class="blog__wrapper">
                <h3 class="title">Blog</h3>
                <div class="blog__content">
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

                            <router-link to="/blogs">
                                <button class="blog__button">explore more</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

</script>

<style scoped>
.blog {}

.blog__container {
    padding-top: 10px;
}

.blog__wrapper {}

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
    grid-template-columns: repeat(3, minmax(50px, 210px));
    background-color: lightblue;
}

.blog__image-container {
    max-width: 210px;
    max-height: 210px;
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
</style>