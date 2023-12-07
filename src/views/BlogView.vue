<template>
    <section class="blog">
        <div class="blog__container">
            <div class="blog__wrapper">
                <div class="blog__content">
                    <div class="blog__patten-images-container">
                        <img src="../assets/images/blog-title-1.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-2.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-3.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-4.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-5.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-6.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-1.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-2.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-3.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-4.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-5.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-6.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-1.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-2.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-3.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-4.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-5.jpg" class="blog__patten-img" alt="Image">
                        <img src="../assets/images/blog-title-6.jpg" class="blog__patten-img" alt="Image">
                    </div>

                    <div class="blog__body" v-if="langStore.lang === 'en'">
                        <div class="blog__header-container">
                            <h3>Blog</h3>
                            <ButtonCrossToBack />
                        </div>
                        <h1>Knitwear blend guide</h1>
                        <article>
                            <p>Looking to upgrade your sweater collection this fall? Us, too; and this year, we’re even more
                                interested than ever in what our favorite styles of sweaters are made of and how that
                                affects
                                their practicality. A sweater material can change the whole experience, so it’s important to
                                know what you are looking for in a sweater and which material can help you best meet your
                                vision. Sweater materials can seem quite complicated, which is why we have put together this
                                handy guide to help all your sweater dreams come true.</p>
                            <b>Sweater materials can seem quite complicated</b>
                            <p>
                                When peeking at the tag on the inside of your sweater, you'll find the specific material,
                                whether it be 100% cashmere or multiple materials such as 70% wool, 20% acrylic, and 10%
                                cashmere.</p>
                        </article>
                        <div class="blog__image-one-container blog__image-container" data-text="Knitwear blend guide">
                            <img src="@/assets/images/blog1.jpg" alt="Image" class="blog__image-budy">
                        </div>
                        <article>
                            <b>wool</b>
                            <p>Wool is the most common material for sweaters and can refer to a variety of animal fibers.
                                This
                                natural material is perfect for function, style, and comfort. Wools are also often
                                long-lasting
                                and high-quality, meaning you will get to enjoy their fabulous fuzziness for years to come.
                                Wool
                                can include sheep’s wool, rabbit’s angora, alpaca, and other natural animal-based fibers.
                                These
                                animals are typically bred and raised for their coats, which are humanely sheared once
                                they’ve
                                reached a certain length to be woven into thread for clothing and other uses.</p>
                            <p>One of the most commonly used wool in sweaters is Merino sheep’s wool. Merino wool is known
                                for
                                being hydrophilic, meaning it can absorb up to 30% of its weight in water, making it a great
                                weatherproof choice of sweater. Women’s wool sweaters, including cashmere, can be made from
                                a
                                mix of materials. This can make the wool less itchy and more comfortable to wear. If you
                                prefer
                                a pure wool sweater, consider wearing a thermal or shirt underneath to offset any potential
                                itching, though that itchiness typically subsides after a few wears and washes.</p>

                        </article>
                        <div class="blog__images-two-columns blog__image-container">
                            <img src="@/assets/images/blog2.jpg" alt="Image" class="blog__image-budy">
                            <img src="@/assets/images/blog3.jpg" alt="Image" class="blog__image-budy">
                        </div>
                    </div>

                    <div class="blog__body" v-if="langStore.lang === 'ua'">
                        <div class="blog__header-container">
                            <h3>Блог</h3>
                            <ButtonCrossToBack />
                        </div>
                        <h1>Посібник з трикотажу</h1>
                        <article>
                            <p>
                                Хочете оновити свою колекцію светрів цієї осені? Нас теж;І цього року ми ще більше
                                зацікавлений, ніж будь -коли, з чого виготовляються наші улюблені стилі светрів і як це
                                вплив
                                їх практичність.Светний матеріал може змінити весь досвід, тому це важливо
                                Знайте, що ви шукаєте у светрі та який матеріал може допомогти вам найкраще зустріти ваш
                                бачення.Светні матеріали можуть здатися досить складними, саме тому ми зібрали це
                                Зручний путівник, який допоможе всім вашим светром.
                            </p>
                            <b>светр матеріали можуть здатися досить складними.</b>
                            <p>
                                Загляньте на тег на внутрішній стороні вашого светра, ви знайдете конкретний матеріал,
                                Будь то 100% кашеміри або кілька матеріалів, таких як 70% вовни, 20% акрилу та 10%
                                Кашемір.
                            </p>
                        </article>
                        <div class="blog__image-one-container blog__image-container" data-text="Knitwear blend guide">
                            <img src="@/assets/images/blog1.jpg" alt="Image" class="blog__image-budy">
                        </div>
                        <article>
                            <b> шерсть</b>
                            <p> вовня - найпоширеніший матеріал для светрів і може посилатися на різноманітні волокна
                                тварин.
                                Це
                                Натуральний матеріал ідеально підходить для функціонування, стилю та комфорту.Вовни також
                                часто
                                довготривалий
                                І якісна, тобто ви отримаєте насолоду від їхньої казкової нечіткості на довгі роки.
                                Вовни
                                Може включати вовни овець, ангору кролика, альпаку та інші природні волокна на основі
                                тварин.
                                Ці
                                Тварин, як правило, розводяться і вирощуються для своїх пальто, які гуманно стрижуються один
                                раз
                                Вони є
                                досягла певної довжини, щоб бути сплетена в нитку для одягу та інших цілей. </p>
                            <p> Однією з найпоширеніших вовни в светрах є вовна овець Меріно.Меріно вовна відома
                                для
                                Будучи гідрофільним, тобто він може поглинати до 30% своєї ваги у воді, що робить його
                                чудовим
                                Погодорійне вибір светра.Жіночі вовняні светри, включаючи кашеміру, можуть бути виготовлені
                                з

                                суміш матеріалів.Це може зробити вовну менш сверблячкою та зручніше для носіння.Якщо ви
                                віддавати перевагу
                                чистий вовняний светр, подумайте про те
                                Свербіння, хоча свербіж зазвичай стихає після кількох зносу та промивань. </p>
                        </article>
                        <div class="blog__images-two-columns blog__image-container">
                            <img src="@/assets/images/blog2.jpg" alt="Image" class="blog__image-budy">
                            <img src="@/assets/images/blog3.jpg" alt="Image" class="blog__image-budy">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <Footer />
</template>

<script setup>
import ButtonCrossToBack from "@/components/ButtonCrossToBack.vue"
import Footer from "@/components/Footer.vue"

import { useLangStore } from '@/store/lang';
const langStore = useLangStore()

</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

p {
    color: var(--edna-brown, #2D1B0D);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 190%;
    letter-spacing: 0.48px;
    text-transform: uppercase;
}

b {
    color: var(--edna-brown, #2D1B0D);
    font-family: "Helvetica Neue";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.48px;
    text-transform: uppercase;
}

.blog {}

.blog__container {}

.blog__wrapper {}

.blog__content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 80px;
}

.blog__images-container {}

.blog__img-container {}

.blog__body {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

.blog__image-one-container {
    width: 100%;
    height: 460px;
}

.blog__image-one-container img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.blog__image-budy {}

.blog__images-two-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
}

.blog__images-two-columns img {
    width: 100%;
    aspect-ratio: 1 / 1.31;
    object-fit: cover;
}

.blog__images-two-columns img:nth-child(3n) {
    width: 100%;
    grid-column: span 2;
    max-height: 460px;
    object-position: top;
}

.blog__header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.blog__patten-images-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: start;
}

.blog__patten-img {}

@media (max-width: 1000px) {
    .blog__patten-images-container {
        display: none;
    }

    .blog__content {
        display: block;
    }

    .blog__body> :not(.blog__image-container) {
        padding-inline: 16px;
    }
}
</style>