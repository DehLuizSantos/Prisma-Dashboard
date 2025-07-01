import { AxiosRequestConfig } from 'axios'

/** 定义axios基础配置 */
export const axiosBaseOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 8000,
}
