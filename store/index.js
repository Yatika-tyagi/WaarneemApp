import Vue from 'vue'
import Vuex from 'vuex'
// Here we import everything that is exported
// from the below directory, allowing us to create the store
import * as app from './modules/app/index'

Vue.use (Vuex)

export default () => new Vuex.Store({
    modules: {
        app
    }
})