<template>
    <swiper :modules="modules" :slides-per-view="1" :space-between="0" :pagination="{ clickable: false }"
        :scrollbar="{ draggable: true, enabled: false }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
    </swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const modules = [Navigation, Pagination, Scrollbar, A11y]




function onSwiper(swiper) {
    console.log(swiper);
}

function onSlideChange() {
    console.log('slide change')
};
</script>
