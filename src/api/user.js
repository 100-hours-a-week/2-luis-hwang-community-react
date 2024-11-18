import axiosInstance from '.'

/* 로그인, 로그아웃, 회원가입 등 유저 관련 API */

// 로그인 요청
export const sendLogin = async ({ email, password }) => {
  const res = await axiosInstance.post('/login', { email, password })

  // 로그인 실패
  if (res.status !== 200) {
    return Promise.reject()
  }

  return Promise.resolve(res.data)
}
