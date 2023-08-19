<template>
  <header>
    <img src="@/assets/logo.png" alt="nike">
    <nav>
      <a :class="((activeBlock == link) ? 'ative' : '')" @click="setActiveBlock(link)" v-for="link in linkArray">{{ link.toUpperCase() }}</a>
    </nav>
    <div class="header__basket-icon" @click="setShowingbasket">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
      <div class="header__basket_count">
        {{ basketCount }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp',
  props:{
    activeBlock: {
      type: String,
      required: true
    },
    showingbasket: {
      type: Boolean,
      required: true
    }
  },  
  data(){
    return{
      linkArray: [
        'man',
        'women',
        'kids',
      ]
    }
  },
  methods: {
    setActiveBlock(activeBlock){
      this.$store.commit('setActiveBlock', activeBlock);
    },
    setShowingbasket(){
      this.$store.commit('basket/setShowingbasket', !this.showingbasket);
    }
  },
  computed: {
    basketCount(){
      return this.$store.getters['basket/getBasketCount'];
    }
  }
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
      cursor: pointer;
      border-bottom: none;
      transition: all .3s ease;

      &.ative{
        font-weight: bold;
        border-bottom: 1px solid black;
      }

      &:hover{
        border-bottom: 1px solid black;
      }
    }
  }

  .header__basket-icon{
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      cursor: pointer;
    }
    .header__basket_count{
      position: relative;
      top: 10px;
      right: -5px;
    }
  }
}
</style>
