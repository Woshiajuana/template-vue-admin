
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import Layout from 'src/layout'
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false });

import store from 'src/store'

Vue.use(Router);

// 创建路由
const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes:  [

        // 登录页面
        {
            path: '/login',
            component: () => import('src/views/login'),
            hidden: true,
            meta: { title: '登录' }
        },

        // 首页
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: () => import('src/views/home'),
                    meta: { title: '首页', icon: 'home' }
                }
            ],
        },

        // 菜单
        {
            path: '/menu',
            component: Layout,
            redirect: '/menu/menu1',
            meta: { title: '菜单', icon: 'home' },
            children: [
                {
                    path: 'menu1',
                    component: () => import('src/views/menu/menu1'),
                    meta: { title: '菜单1' }
                },
                {
                    path: 'menu2',
                    component: () => import('src/views/menu/menu2'),
                    meta: { title: '菜单2' }
                }
            ],
        },

        {
            path: '*',
            redirect: '/',
            hidden: true,
        }
    ],
});

// 重置路由
const router = createRouter();

/**
 * 判断用户是否第一次打开APP，是否启动引导页面
 * 设置路由之间的跳转动画
 * */
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    window.document.title = to.meta.title || '罗氏稳糖';
    next();
    NProgress.done();
});

router.afterEach(() => {
    NProgress.done();
});


router.return = function (route, path) {
    if (route) {
        store.dispatch('tagsView/' + 'delView', route).null();
    }
    path ? this.push(path) : this.go(-1);
};


export default router
