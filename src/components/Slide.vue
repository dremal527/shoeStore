<template>
    <div class="slide" @transitionend="setAnimations">
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
            type: Object,
            required: true
        }
    },
    methods: {
        setAnimations(){
            document.querySelector('.slide').classList.remove('next');
        },
    },
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        opacity: 1;
        transition: all .3s ease;

        &.next{
            opacity: 0;
        }

        .slide-image{
            width: 60%;

            img{
                width: 100%;
                max-width: 500px;
            }
        }
        .slide-info{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            overflow-y: auto;

            .slide-info__catalog-title{
                color: #000;
                font-family: Public Sans;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .slide-info__shoe-name{
                width: 100%;
                max-width: 355px;
                color: #000;
                font-family: Bebas Neue;
                font-size: 60px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .slide-info__price{
                color: #000;
                font-family: Public Sans;
                font-size: 25.263px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .slide-info__description{
                width: 90%;
                max-width: 353px;
                color: #000;
                font-family: Public Sans;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .slide-info__add-cart{
                width: 100%;
                max-width: 100px;
                display: flex;
                padding: 10px;
                justify-content: center;
                align-items: center;
                gap: 8.454px;
                border-radius: 4.227px;
                background: #000;
                box-shadow: 0px 3.3816378116607666px 3.3816378116607666px 0px #C6C5FF;
                cursor: pointer;
                transition: all .3s ease;

                &:hover{
                    background: #000000e0;
                }

                svg path{
                    fill: white;
                }
            }
        }
    }
</style>