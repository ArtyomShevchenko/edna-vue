<template>
    <div class="services">
        <div class="services__container">
            <div class="services__wrapper">
                <div class="services__content">
                    <CardNavigathion />
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CardNavigathion from '@/components/CardNavigathion.vue';
</script>

<style scoped>
.services__container {
    padding-top: 80px;
    padding-bottom: 80px;
}

.services__wrapper {}

.services__content {}
</style>