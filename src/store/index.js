import Vue from 'vue'
import Vuex from 'vuex'
import slides from './slides'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slideIndex: 0,
    maxSlideIndex: 2,
  },
  getters: {
    getSlideIndex(state){
      return state.slideIndex;
    },
    getMaxSlideIndex(state){
      return state.maxSlideIndex;
    }
  },
  mutations: {
    setSlideIndex(state, payload){
      state.slideIndex = payload;
    }
  },
  actions: {
  },
  modules: {
    slides
  }
})
