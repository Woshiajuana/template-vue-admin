
import NProgress from 'nprogress'
import axios from 'axios'
import storage from 'src/utils/storage'
import store from 'src/store'
import { filterDate } from 'src/utils/filters'

NProgress.configure({
    showSpinner: false
});

const instance = axios.create({
    // baseURL: window.location.hostname.includes('localhost') || window.location.hostname.includes('192') ? 'http://192.168.2.177:19083/' : 'http://xcx.xiaomiqiu.com/',
    // baseURL: window.location.hostname.includes('localhost') || window.location.hostname.includes('192') ? 'http://192.168.2.109:19083/' : 'http://xcx.xiaomiqiu.com/',
    baseURL: window.location.hostname.includes('localhost') || window.location.hostname.includes('192') ? 'http://192.168.2.115:19083/' : 'http://20.160.0.32:19083/',
    // baseURL: 'http://20.160.0.32:19083/',
    timeout: 60 * 1000,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    let { url, baseURL, data, params, headers, method } = config;
    const { accessToken } = storage.local.get('$$USER_INFO') || {};
    Object.assign(headers, {
        Authorization: accessToken ? `Bearer ${accessToken}` : 'Basic cGlnOnBpZw==',
    });
    console.log(`${baseURL}${url} [${method}]请求参数 =>`, data || params);
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    let { data: resData, config } = response;
    let { url, baseURL, method } = config;
    console.log(`${baseURL}${url} [${method}]请求成功 =>`, resData);
    if (!resData) {
        return Promise.reject(`网络繁忙，请稍后再试(1)`);
    }
    let { code, msg, data } = resData;
    if (code !== 0) {
        return Promise.reject(msg || `网络繁忙，请稍后再试(2)`);
    }
    return data;
},  (error) => {
    console.log('请求错误 => ', error.response);
    let errData = '网络繁忙，请稍后再试(3)';
    if (error && error.response) {
        let { data: resData, status } = error.response;
        if (status === 401) {
            store.dispatch('user/' + 'ACTION_USER_LOGOUT').null();
            errData = '登录已失效，请重新登录';
        } else if (resData) {
            let { msg, message } = resData || {};
            errData = msg || message || `网络繁忙，请稍后再试[${status}]`;
        } else  {
            errData = `网络繁忙，请稍后再试[${status}]`;
        }
    }
    return Promise.reject(errData);
});

const curl = (url, data = {}, options = {}) => {
    NProgress.start();
    let {
        method
    } = options = Object.assign({
        url,
        method: 'post',
    }, options);

    let auxParams = getAuxParams();
    if (data instanceof FormData) {
        for (let k in auxParams) {
            data.append(k, auxParams[k]);
        }
    } else {
        data = Object.assign(auxParams, data);
    }
    options[method === 'get' ? 'params' : 'data'] = data;

    return instance(options).finally(() => NProgress.done());
};

function getAuxParams (time = new Date()) {
    return {
        traceId: `123456789${time.getTime()}`,
        reqDate: filterDate('yyyyMMdd', time),
        reqTime: filterDate('yyyyMMddhhmmss', time),
    }
}

curl.get = (url, data = {}, options = {}) => {
    return this(url, data, Object.assign({ method: 'get' }, options));
};

curl.post = (url, data = {}, options = {}) => {
    return this(url, data, options);
};

export default curl;
