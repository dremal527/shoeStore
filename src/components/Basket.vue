<template>
    <div class="basket" :class="((showingbasket) ? 'basket-showing' : 'basket-hidden')">
        <div class="basket__body">
            <div class="basket__body__button-close" @click="setShowingbasket">
                <font-awesome-icon :icon="['fa', 'circle-xmark']" />
            </div>
            <div class="basket__body__items">
                <template v-if="basketItems.length == 0">
                    <h2>basket is empty</h2>
                </template>
                <template v-else>
                    <div class="basket__body__items_item" v-for="item in basketItems">
                        <img :src="item.img" alt="">
                        <div class="basket__item-title">{{ item.name }}</div>
                        <div class="basket__item-price">{{ item.price }}</div>
                        <div class="basket__item-delete" @click="deleteItem(item.id)">
                            <font-awesome-icon :icon="['fa', 'circle-xmark']" />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'basket',
    props: {
        basketItems: {
            type: Array,
            required: true
        },
        showingbasket: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        setShowingbasket(){
            this.$store.commit('basket/setShowingbasket', !this.showingbasket);
        },
        deleteItem(id){
            this.$store.dispatch('basket/deleteBasketItem', id);
        }
    }
}
</script>

<style lang="scss" scoped>
    .basket{
        position: absolute;
        width: 100%;
        height: 100%;

        background: #000000d0;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all .3s ease;

        &.basket-hidden{
            z-index: -1000;
            opacity: 0; 
        }

        &.basket-showing{
            z-index: 9999;
            opacity: 1; 
        }

        .basket__body{
            width: 70%;
            height: 70%;
            
            border-radius: 10px;
            background: #FFF;

            display: flex;
            justify-content: space-between;
            align-items: center;
            
            position: relative;

            .basket__body__button-close{
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 20px;
                cursor: pointer;
                color: #000;

                transition: all .3s ease;

                &:hover{
                    color:#000000b0;
                }
            }

            .basket__body__items{
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                overflow: hidden;
                overflow-y: scroll;

                .basket__body__items_item{
                    width: 80%;
                    min-height: 60px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    overflow: hidden;
                    margin-top: 20px;

                    &:first-child{
                        margin-top: 50px;
                    }

                    &:last-child{
                        margin-bottom: 50px;
                    }

                    img{
                        width: 100px;
                    }

                    .basket__item-delete{
                        color:#000;
                        cursor: pointer;
                        transition: all .3s ease;

                        &:hover{
                            color:#000000b0;
                        }
                    }
                }
            }
        }
    }
</style>