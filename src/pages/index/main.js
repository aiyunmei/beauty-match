import Vue from 'vue'
import Vuex from 'vuex'
import App from './index'

Vue.use(Vuex)

const app = new Vue(App)
app.$mount()
