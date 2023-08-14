<template>
  <header>
    <img src="@/assets/logo.png" alt="nike">
    <nav>
      <router-link to="/men">MEN</router-link>
      <router-link to="/women">WOMEN</router-link>
      <router-link to="/kids">KIDS</router-link>
      <router-link to="/accessories">ACCESSORIES</router-link>
      <router-link to="/sales">SALES</router-link>
    </nav>
    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caprasimo&family=Ubuntu:wght@300;400&display=swap');

header{
  margin-top: 60px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav{
    font-family: 'Bebas Neue', sans-serif;
    font-family: 'Caprasimo', cursive;
    font-family: 'Ubuntu', sans-serif;

    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
      color: #000;
      text-decoration: none;
    }
  }
}
</style>
