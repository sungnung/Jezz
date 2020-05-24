import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    May_items:[
    ],
    Dani_items:[
    ],
    Map_Item:{
        title:'Jeju Map',
        color:'primary'
    }

  },
  mutations: {
    ADD_May_item (state, item) {
        state.May_items.push(item)
    },
    ADD_Dani_item (state, item) {
        state.Dani_items.push(item)
    },
    SET_Map(state, item){
        state.Map_Item = item
    },
  },
  actions: {
  },
  modules: {
  }
})
