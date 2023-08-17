<template>
    <div class="paginator">
        <button @click="previousSlide()" :class="((slideIndex > 0) ? '' : 'invisible')" :disabled="slideIndex < 0" class="paginator-btn previous"><font-awesome-icon :icon="['fas', 'arrow-left-long']" /></button>
        <button @click="nextSlide()" :class="((slideIndex != maxSlideIndex) ? '' : 'invisible')" :disabled="slideIndex == maxSlideIndex" class="paginator-btn next">Next Style <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></button>
    </div>
</template>

<script>
export default{
    name: 'Paginator',
    data(){
        return{
            slideAnimationTime: 300
        }
    },
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
        setAnimations(){
            document.querySelector('.slide').classList.add('next')
        },
        previousSlide(){
            this.setAnimations();
            setTimeout(() => {
                this.$store.commit('slides/setSlideIndex', this.slideIndex - 1);
            }, this.slideAnimationTime);
        },
        nextSlide(){
            this.setAnimations();
            setTimeout(() => {
                this.$store.commit('slides/setSlideIndex', this.slideIndex + 1);
            }, this.slideAnimationTime);
        }
    },
    computed: {}
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

            &.invisible{
                opacity: 0;
                cursor: auto;

                &.next:hover{
                    padding: 10px 40px;
                }
                &.previous:hover{
                    padding: 10px 40px;
                }
            }
        }
    }
</style>