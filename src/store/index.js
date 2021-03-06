
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagsView from './modules/tagsView'
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
        settings,
        tagsView,
    },
    getters,
});

export default store
