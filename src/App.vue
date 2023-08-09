<template>
  <div id="app">
    <header-app></header-app>
    <router-view/>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp';

export default {
  components:{
    'header-app' : HeaderApp
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
