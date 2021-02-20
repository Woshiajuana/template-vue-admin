
import Vue from 'vue'

// reset.css
// import 'normalize.css/normalize.css';
import 'src/assets/scss/reset.scss'

// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import App from 'src/App.vue'
import store from 'src/store'
import router from 'src/router'

import 'src/assets/scss/index.scss'
import 'src/assets/icons' // icon
import 'src/utils/promise' //

// 全局工具
import storage from 'src/utils/storage'
import validate from 'src/utils/validate'
import modal from 'src/utils/modal'
import config from 'src/utils/config'
import helper from 'src/utils/helper'
import * as api from 'src/api'
Vue.prototype.$storage = storage;
Vue.prototype.$modal = modal;
Vue.prototype.$api = api;
Vue.prototype.$validate = validate;
Vue.prototype.$config = config;
Vue.prototype.$helper = helper;

// 全局组件
const components = require.context('./components', true, /index\.vue$/); // 不支持变量传路径
components.keys().forEach(key => {
    let componentName = key.substring(2, key.indexOf('/index.vue'));
    Vue.component(componentName, components(key).default || components(key));
});

// 全局 filters
import * as filters from 'src/utils/filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
