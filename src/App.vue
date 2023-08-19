<template>
  <div id="app">
    <header-app :activeBlock="activeBlock" :showingbasket="showingbasket"/>
    <paginator :slideIndex="slideIndex" :maxSlideIndex="maxSlideIndex"/>
    <slide :slideData="slideData"/>
    <basket :basketItems="basketItems" :showingbasket="showingbasket"/>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp';
import paginator from '@/components/Paginator';
import slide from '@/components/Slide';
import basket from '@/components/Basket';

export default {
  components:{
    'header-app' : HeaderApp,
    paginator,
    slide,
    basket
  },
  data(){
    return{
      maxSlideIndex: 0
    }
  },
  computed: {
    activeBlock(){
      return this.$store.getters.getActiveBlock;
    },
    slideData(){
      const slides = this.$store.getters['slides/getSlides'];
      const choiceSlides = slides[this.activeBlock][this.slideIndex];
      this.maxSlideIndex = slides[this.activeBlock].length - 1;

      return choiceSlides;
    },
    slideIndex(){
      return this.$store.getters['slides/getSlideIndex'];
    },
    basketItems(){
      return this.$store.getters['basket/getbasketItems'];
    },
    showingbasket(){
      return this.$store.getters['basket/getShowingbasket'];
    }
  }
}
</script>

<style lang="scss">
body{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: #EEEEFF;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100dvh;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 0 auto;
  }

}
</style>
