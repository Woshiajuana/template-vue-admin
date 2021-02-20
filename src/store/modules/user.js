
import { doUserLogin, reqUserMenu } from 'src/api'
import $storage from 'src/utils/storage'
import router, { resetRouter } from 'src/router'

const state = {
    userInfo: '',
    menus: '',
};

const mutations = {

    SET_USER_INFO (state, userInfo) {
        state.userInfo = userInfo;
        $storage.local.set('$$USER_INFO', userInfo);
    },

    SET_USER_MENUS (state, menus) {
        state.menus = menus;
        $storage.local.set('$$USER_MENU', menus);
    },

};

const actions = {

    // 登录
    ACTION_USER_LOGIN ({ commit }, params) {
        return new Promise((resolve, reject) => {
            doUserLogin(params).then(res => {
                let { access_token: accessToken, user_info: userInfo } = res;
                userInfo.permissions = userInfo.authorities.map(item => item.authority);
                userInfo =  { ...userInfo, accessToken };
                commit('SET_USER_INFO', userInfo);
                resolve(userInfo);
            }).catch(err => {
                reject(err);
            });
        });
    },

    // 退出
    ACTION_USER_LOGOUT ({ commit, state, dispatch }, options = { useAutoJumpLogin: true }) {
        return new Promise((resolve, reject) => {
            commit('SET_USER_INFO', '');
            commit('SET_USER_MENUS', '');
            resetRouter();
            dispatch('tagsView/' + 'delAllCachedViews', {}, { root: true });
            dispatch('tagsView/' + 'delAllVisitedViews', {}, { root: true });
            if (options.useAutoJumpLogin) router.push('/login');
            resolve();
        });
    },

    // 获取菜单
    ACTION_USER_MENUS ({ commit }) {
        return new Promise((resolve, reject) => {
            reqUserMenu().then(res => {
                commit('SET_USER_MENUS', res);
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
