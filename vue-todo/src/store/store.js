import Vue from 'vue'
import Vuex from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        headerText : 'Just Do It!'
    }
});