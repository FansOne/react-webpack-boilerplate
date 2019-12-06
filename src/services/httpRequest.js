import axios from 'axios'
import qs from 'qs'

let env = process.env.NODE_ENV; //vue&react 默认已经配置了一个NODE_ENV的环境变量
switch (env) {
    case 'development':
        axios.defaults.baseURL = 'https://www.google.com'
        break;
    case 'production':
        axios.defaults.baseURL = 'https://wap.10086.cn'
        break;

    default:
        break;
}
// 请求拦截
axios.interceptors.request.use(
    config => {
        if (config.method == 'post') {
            config.data = qs.stringify(config.data);
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        return Promise.reject(error);
    }
);

export default axios