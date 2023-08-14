<template>
  <div id="app">
    <header-app/>
    <paginator :slideIndex="slideIndex" :maxSlideIndex="maxSlideIndex"/>
    <slide :slideData="slideData"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp';
import paginator from '@/components/Paginator';
import slide from '@/components/Slide';

export default {
  components:{
    'header-app' : HeaderApp,
    paginator,
    slide
  },
  data(){
    return{

    }
  },
  computed: {
    slideIndex(){
      return this.$store.getters.getSlideIndex;
    },
    maxSlideIndex(){
      return this.$store.getters.getMaxSlideIndex;
    },
    slideData(){
      const slides = this.$store.getters['slides/getSlides'];
      return slides[this.slideIndex];
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
  }

}
</style>
