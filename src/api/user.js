import { HttpStatusCode } from 'axios'
import axiosInstance from '.'

/* 로그인, 로그아웃, 회원가입 등 유저 관련 API */

/* 로그인 요청 */
export const sendLogin = async ({ email, password }) => {
  const res = await axiosInstance.post('/login', { email, password })
  if (res.status !== HttpStatusCode.Ok) return Promise.reject()
  return Promise.resolve(res.data)
}

/* 로그아웃 요청 */
export const sendLogout = async ({ sid }) => {
  const res = await axiosInstance.post('/logout', { sid })
  if (res.status !== HttpStatusCode.Ok) return Promise.reject()
  return Promise.resolve()
}
