import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { sendLogin } from '../api/user'
import { checkEmail, checkPassword } from '../utils/utils'
import { useNavigate } from 'react-router-dom'
import { useSessionStore } from '../store/user'

const useLogin = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const { setSession } = useSessionStore()
  const navigate = useNavigate()

  /* 로그인 요청 */
  const { mutate, isPending } = useMutation({
    mutationFn: sendLogin,
    onSuccess: (data) => {
      if (data) {
        setSession({ email: data.email, sid: data.sid, profileImg: data.profileImg })
        setEmailInput('')
        setPasswordInput('')
      }
    },
    onError: (error) => {
      alert('로그인에 실패하였습니다.\n' + error)
    },
    onSettled: () => {
      navigate('/')
    },
  })

  /* 로그인 인풋 핸들러 */
  const handleEmailInput = (e) => setEmailInput(e.target.value)
  const handlePasswordInput = (e) => setPasswordInput(e.target.value)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    mutate({ email: emailInput, password: passwordInput })
  }

  /* 로그인 값 검증 */
  const isValid = checkEmail(emailInput) && checkPassword(passwordInput)
  const isValidEmail = checkEmail(emailInput)
  const isValidPassword = checkPassword(passwordInput)

  /* 헬퍼 텍스트 */
  const emailHelperText = checkEmail(emailInput)
    ? '올바른 이메일입니다.'
    : '올바른 이메일 형식을 입력해주세요'
  const passwordHelperText = checkPassword(passwordInput)
    ? '올바른 비밀번호입니다.'
    : '대/소문자, 숫자, 특수문자를 포함해주세요.'

  return {
    isPending,
    isValid,
    isValidEmail,
    isValidPassword,
    emailHelperText,
    passwordHelperText,
    handleEmailInput,
    handlePasswordInput,
    handleOnSubmit,
  }
}

export default useLogin
