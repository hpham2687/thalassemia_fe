import configs from '@/config';
import token from '@/utils/token';
/**
 * request 网络请求工具
 * 更详细的api文档: https://bigfish.alipay.com/doc/api#request
 */
import { history, request as requestUmi } from 'umi';

import { cloneDeep, merge } from 'lodash';
import type { RequestInterceptor, RequestOptionsInit } from 'umi-request';
import { extend, ResponseError } from 'umi-request';
// import router from 'umi/router';
import Reqs from 'umi-request';

// Part 2: Request Interceptors, (use this instead of "headers" directly in request config)
const requestInterceptor: RequestInterceptor = (url, options) => {
  return {
    url,
    options: merge(cloneDeep(options), {
      headers: { Authorization: `Bearer ${token.get().accessToken}` },
    }),
  };
};
const refreshAccessToken = () => {
  //@ts-ignore
  return fetch(configs.apiUrl + '/auth/refresh', {
    headers: {
      Authorization: `Bearer ${token.get().refreshToken}`,
    },
    // data: {},
    method: 'POST',
  });
};

// Part 3: Response Interceptos
const { cancel } = Reqs.CancelToken.source();
let refreshTokenRequest: Promise<any> | null = null;
const responseInterceptor = async (response: Response, options: RequestOptionsInit) => {
  //@ts-ignore
  const accessTokenExpired = response.status === 401;
  if (accessTokenExpired) {
    try {
      if (!refreshTokenRequest) {
        refreshTokenRequest = refreshAccessToken();
      }
      // multiple requests but "await"ing for only 1 refreshTokenRequest, because of closure
      const res = await refreshTokenRequest;
      if (!res.ok) throw new Error();
      if (res.accessToken) token.save(res.accessToken);
      // if (res.refreshToken) token.save(res.refresh); // for ROTATE REFRESH TOKENS
      return requestUmi(
        response.url,
        merge(cloneDeep(options), {
          headers: { Authorization: `Bearer ${res.accessToken}` },
        }),
      );
    } catch (err) {
      console.log(' loi roi', err);

      cancel('Session time out.');
      // history.push('/user/login');
      throw err;
    } finally {
      refreshTokenRequest = null;
    }
  }

  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  //@ts-ignore
  prefix: configs.apiUrl,
  // errorHandler, // 默认错误处理
  // credentials: 'include', // 默认请求是否带上cookie
});
// request拦截器
request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(responseInterceptor);
export default request;
