import { createStore } from 'vuex'

export default createStore({

  // State คือพื้นที่สำหรับตัวแปร object หรือค่าต่าง ๆ จองแอพเราไว้
  state: {
    showSideMenu: false,
    carShow: 0,
    evaShow: 0,
    evaForm: 'ไม่พบข้อมูล',


    
  },
  getters: {
  },
  mutations: {
    // function show เมดูด้านข้าง
    toggleSideMenu(state){
      state.showSideMenu =! state.showSideMenu
    }
  },
  actions: {
  },
  modules: {
  }
})
