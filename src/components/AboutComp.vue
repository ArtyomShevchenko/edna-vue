<script setup></script>

<template>
    <section class="about">
        <div class="about__container">
            <div class="about__wrapper">
                <div class="about-content">
                    <article class="about-body">
                        <h3 class="about-subtitle subtitle">about</h3>
                        <div class="about-text">
                            <p>
                                Welcome,
                            </p>
                            <p>
                                I’m Edna Shindinde, personal style advisor & wardrobe editor.
                            </p>
                            <p>
                                I help women embrace their value by teaching how to build a staple wardrobe in line
                                withtheir inner power and beauty.
                            </p>
                            <p>
                                The greatest flair of mine is to see talent and strength behind every woman I meet. Whether
                                you build a career, take care of a family, own a business or enjoy life by your rules – you
                                are a
                                high-value woman. You set a precedent & should own it proudly!
                            </p>
                            <p>
                                My vision is for each women to unblushingly celebrate her beauty, to be seen and respected
                                without
                                doubting own looks. Styling is just one way to achieve that. And I couldn’t ask for a better
                                mission, as
                                to guide you on this journey.
                            </p>
                        </div>
                        <div class="about-links">
                            <RouterLink to="/services">Services</RouterLink>
                            <RouterLink to="/testimotional">TESTIMONIALS</RouterLink>
                            <RouterLink to="/book">Book</RouterLink>
                        </div>
                    </article>

                    <div class="about-img-contain">
                        <img class="about-img" src="../assets/images/img2.jpg" alt="Girl">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.about {
    overflow: hidden;
}

.about__container {
    position: relative;
    width: 100%;
}

.about-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.about-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 433px;
}

.about-text {}

.about-text p {
    margin-bottom: 10px;
}

.about-links {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.about-img-contain {
    height: 466px;
    position: relative;
}

.about-img {
    position: absolute;
    top: 0;
    object-position: left top;

    height: 100%;
}


@media (max-width: 768px) {
    .about__container {
        padding: 0;
    }

    .about-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .about-body {
        padding: 40px 16px;
        max-width: 100%;
        gap: 40px;
    }

    .about-text p {
        margin-bottom: 6px;
    }

    /* .about .content {
        padding: 40px 16px;
        gap: 40px;
        height: 100%;
        max-height: 100%;
    }

    .about .img-container {
        width: 100%;
    }

    .about .img-container img {
        position: static;
        width: 100%;
    }

    .about .content {
        width: 100%;
    } */
}
</style>