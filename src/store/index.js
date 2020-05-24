import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ForecastResult:{
        clouds: {},
        wind: {},
        main: {},
        weather: [{}],
        name: '',
        sys: {}
    },
    refresh:false,

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
