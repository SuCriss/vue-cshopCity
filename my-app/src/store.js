import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList:[]
  },
  mutations: {
    addGoods:(state,data) => {
      state.goodsList.push(data)
      localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
    }
  },
  actions: {
    updateGoodsList(context,data){
      context.commit('addGoods',data)
    }
  },
  getters:{
    getGoods(state){
      return state.goodsList
    }
  }
})
