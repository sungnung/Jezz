import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    May_items:[
        {is_done:false,text:'썬크림(바디용)',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'세안도구',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'팔토시',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'수영복',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'셀카봉',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'상비약',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'커플티(긴팔)',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'운동화',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'썬글라스',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'워터레깅스',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'힙색(카키)',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'고데기',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'???',tiem:'2020-05-24 18:00'},
    ],
    Dani_items:[
        {is_done:false,text:'수영복',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'예쁜마음',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'피크닉 매트',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'모자(슬기, 나)',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'커플티(긴팔)',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'운동화',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'???',tiem:'2020-05-24 18:00'},
        {is_done:false,text:'썬글라스',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'가방(옆으로)',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'면도기',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'화장품',tiem:'2020-05-26 22:16'},
        {is_done:false,text:'왁스/스프레이',tiem:'2020-05-26 22:16'},

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
