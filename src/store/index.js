import Vue from 'vue'
import Vuex from 'vuex'
import slides from './slides'
import basket from './basket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBlock: 'man'
  },
  getters: {
    getActiveBlock(state){
      return state.activeBlock;
    }
  },
  mutations: {
    setActiveBlock(state, payload){
      if(state.activeBlock != payload){
        state.activeBlock = payload;
        this.commit('slides/setSlideIndex', 0);
      }
    }
  },
  actions: {},
  modules: {
    slides,
    basket
  }
})
