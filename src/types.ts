import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: <T = AxiosRequestConfig>(config: T) => T
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

/**
 * 任意Object类型
 */
export type AnyObj = Record<string, any>

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors,
  delayTime?: number,
  noMsg?: boolean | undefined,
  filterEmptyData?: boolean,
  repeatFilter?: boolean,
}
export interface CancelRequestSource {
  [index: string]: () => void
}


