import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    May_items:[
        {is_done:false,text:'썬크림(바디용)',tiem:'-'},
        {is_done:false,text:'세안도구',tiem:'-'},
        {is_done:false,text:'팔토시',tiem:'-'},
        {is_done:false,text:'수영복',tiem:'-'},
        {is_done:false,text:'셀카봉',tiem:'-'},
        {is_done:false,text:'상비약',tiem:'-'},
        {is_done:false,text:'커플티(긴팔)',tiem:'-'},
        {is_done:false,text:'운동화',tiem:'-'},
        {is_done:false,text:'???',tiem:'-'},
    ],
    Dani_items:[
        {is_done:false,text:'수영복',tiem:'-'},
        {is_done:false,text:'예쁜마음',tiem:'-'},
        {is_done:false,text:'피크닉 매트',tiem:'-'},
        {is_done:false,text:'모자(슬기, 나)',tiem:'-'},
        {is_done:false,text:'커플티(긴팔)',tiem:'-'},
        {is_done:false,text:'운동화',tiem:'-'},
        {is_done:false,text:'???',tiem:'-'},

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
