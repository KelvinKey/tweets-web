/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { Toast } from 'vant';
// import store from '../store/index'

/**
 * 请求超时时间
 */
// axios.defaults.timeout = 10000;

/**
 * post请求头
 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/**
 * 跨域配置
 */
axios.defaults.baseURL = "/api";

// 拦截请求
// axios.interceptors.request.use(function(config) {
//     Toast.loading('加载中', 0);
//     return config
// });

// // 拦截相应
// axios.interceptors.response.use(function(config) {
//     Toast.hide();
//     return config
// });

/** 
 * definition
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @param {token} token [请求时携带token]
 */
const api = {

    get: (url, params, token) => {
        return api.apiAxios('GET', url, params, token);
    },

    post: (url, params) => {
        return api.apiAxios('POST', url, params, token);
    },

    put: (url, params) => {
        return api.apiAxios('PUT', url, params, token);
    },

    delete: (url, params) => {
        return api.apiAxios('DELETE', url, params, token);
    },
    apiAxios: (method, url, params, token) => {
        //return new Promise((resolve, reject) => {

        return axios({
            method: method,
            //拼接参数
            url: method === 'GET' || method === 'DELETE' ? api.queryString(url, params) : url,
            data: method === 'POST' || method === 'PUT' ? QS.stringify(params) : null,
            baseURL: root,
            timeout: 10000,
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: false
        });


        // axios.get(url, {
        //         params: params
        //     })
        //     .then(res => {
        //         resolve(res.data);
        //     })
        //     .catch(err => {
        //         reject(err.data)
        //     })
        //});
    },
    // 根据name获取地址栏的参数值
    getQueryString(name) {
        let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
        let hash = window.location.hash
        let search = hash.split('?')
        let r = search[1] && search[1].match(reg)
        if (r != null) return r[2];
        return ''
    },
    // 拼接参数至url
    queryString(url, query) {
        let str = []
        for (let key in query) {
            str.push(key + '=' + query[key])
        }
        let paramStr = str.join('&')
        return paramStr ? `${url}?${paramStr}` : url
    }
};

module.exports = api;