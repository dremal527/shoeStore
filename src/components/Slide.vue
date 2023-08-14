<template>
    <div class="slide">
        <div class="slide-image">
            <img :src="slideData.img" alt="">
        </div>
        <div class="slide-info">
            <div class="slide-info__catalog-title">{{ slideData.title }}</div>
            <div class="slide-info__shoe-name">{{ slideData.name }}</div>
            <div class="slide-info__price">{{ slideData.price }}</div>
            <div class="slide-info__description">{{ slideData.description }}</div>
            <div class="slide-info__add-cart"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Slide',
    props:{
        slideData: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide{
        width: 90%;
        height: 100%;
        border-radius: 10px;
        margin: 30px 0px;
        background: #FFF;
        box-shadow: 11px 11px 35px 0px #C6C5FF;
    }
</style>