<template>
    <div class="paginator">
        <template v-if="slideIndex > 1">
            <button @click="previousSlide()" class="paginator-btn previous"><font-awesome-icon :icon="['fas', 'arrow-left-long']" /></button>
        </template>
        <template v-if="slideIndex != maxSlideIndex">
            <button @click="nextSlide()" class="paginator-btn next">Next Style <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></button>
        </template>
    </div>
</template>

<script>
export default{
    name: 'Paginator',
    props: {
        slideIndex: {
            type: Number,
            required: true
        },
        maxSlideIndex: {
            type: Number,
            required: true
        }
    },
    methods: {
        previousSlide(){
            this.$store.commit('setSlideIndex', this.slideIndex - 1);
        },
        nextSlide(){
            this.$store.commit('setSlideIndex', this.slideIndex + 1);
        }
    }
}
</script>

<style lang="scss" scoped>
    .paginator{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .paginator-btn{
            border: none;
            background: black;
            color: white;
            padding: 10px 40px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 15px;
            margin-top: 20px;
            transition: all .3s ease;

            &.previous{
                margin-right: 30px;

                &:hover{
                    padding: 10px 41px;
                }
            }

            &.next:hover{
                padding: 10px 41px;
            }
        }
    }
</style>