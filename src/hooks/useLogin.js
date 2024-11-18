import { useMutation } from '@tanstack/react-query'
import { useState, useCallback, useMemo } from 'react'
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
        setEmailInput('')
        setPasswordInput('')
        setSession({ email: data.email, sid: data.sid })
        navigate('/')
      }
    },
    onError: (error) => {
      alert('로그인에 실패하였습니다.' + error)
    },
  })

  /* 로그인 인풋 핸들러 */
  const handleEmailInput = useCallback((e) => setEmailInput(e.target.value), [])
  const handlePasswordInput = useCallback((e) => setPasswordInput(e.target.value), [])
  const handleOnSubmit = (e) => {
    e.preventDefault()
    mutate({ email: emailInput, password: passwordInput })
  }

  /* 로그인 값 검증 */
  const isValid = useMemo(
    () => checkEmail(emailInput) && checkPassword(passwordInput),
    [emailInput, passwordInput],
  )

  const isValidEmail = useMemo(() => checkEmail(emailInput), [emailInput])
  const isValidPassword = useMemo(() => checkPassword(passwordInput), [passwordInput])

  /* 헬퍼 텍스트 */
  const emailHelperText = useMemo(
    () => (checkEmail(emailInput) ? '올바른 이메일입니다.' : '올바른 이메일 형식을 입력해주세요'),
    [emailInput],
  )

  const passwordHelperText = useMemo(
    () =>
      checkPassword(passwordInput)
        ? '올바른 비밀번호입니다.'
        : '대/소문자, 숫자, 특수문자를 포함해주세요.',
    [passwordInput],
  )

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
