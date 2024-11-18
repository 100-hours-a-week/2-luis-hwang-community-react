import { useMutation } from '@tanstack/react-query'
import { useState, useCallback, useMemo } from 'react'
import { sendLogin } from '../api/user'
import { checkEmail, checkPassword } from '../utils/utils'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const navigate = useNavigate()

  /* 로그인 요청 */
  const { mutate, isLoading } = useMutation({
    mutationFn: sendLogin,
    onMutate: () => {
      console.log('mutation 실행 전')
    },
    onSuccess: (data) => {
      console.log(data)
      setEmailInput('')
      setPasswordInput('')
      navigate('/')
    },
    onError: (error) => {
      alert('로그인에 실패하였습니다.')
      console.log('FAIL')
    },
    onSettled: () => {
      console.log('finally처럼 마지막에 실행')
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

  /* 비밀번호 안내 텍스트 */
  const passwordHelperText = useMemo(
    () => (checkPassword(passwordInput) ? '' : '대/소문자, 숫자, 특수문자를 포함해주세요.'),
    [passwordInput],
  )

  return {
    isLoading,
    isValid,
    passwordHelperText,
    handleEmailInput,
    handlePasswordInput,
    handleOnSubmit,
  }
}

export default useLogin
