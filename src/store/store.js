import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    video: '',
    videoState: 0
  },
  mutations: {
    SET_VIDEO (state, data) {
      state.video = data
    }
  }
})
