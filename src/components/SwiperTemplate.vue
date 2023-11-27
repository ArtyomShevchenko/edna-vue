<template>
    <swiper :modules="modules" :slides-per-view="1" :space-between="0"  :pagination="{ clickable: false }"
        :scrollbar="{ draggable: true, enabled: false }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/img4.jpg" alt=""></swiper-slide>
    </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>
