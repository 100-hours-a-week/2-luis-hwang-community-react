import { Link } from 'react-router-dom'
import LabelInput from '../components/LabelInput'
import useLogin from '../hooks/useLogin'
import Loading from '../components/Loading'

const Login = () => {
  // prettier-ignore
  const {
    isPending,
    isValid,
    isValidEmail,
    isValidPassword,
    emailHelperText,
    passwordHelperText,
    handleEmailInput,
    handlePasswordInput,
    handleOnSubmit
  } = useLogin()

  /* 로그인 버튼 스타일 */
  const loginBtnClassName = [
    'w-full h-[36px] rounded-md text-[16px] text-white mt-4',
    isValid ? 'bg-[#7F6AEE] cursor-pointer' : 'bg-[#ACA0EB] cursor-not-allowed',
  ].join(' ')

  return (
    <div className='mb-24'>
      {isPending && <Loading />}
      <h1 className='text-3xl font-bold text-center mb-12'>로그인</h1>
      <form onSubmit={handleOnSubmit} className='flex flex-col gap-y-6'>
        <LabelInput
          labelName='이메일'
          inputType='text'
          placeholder='이메일을 입력해주세요.'
          isValid={isValidEmail}
          helperText={emailHelperText}
          onChange={handleEmailInput}
        />
        <LabelInput
          labelName='비밀번호'
          inputType='password'
          placeholder='비밀번호를 입력해주세요.'
          isValid={isValidPassword}
          helperText={passwordHelperText}
          onChange={handlePasswordInput}
        />

        <input type='submit' value='로그인' className={loginBtnClassName} disabled={!isValid} />
        <Link to='/signup' className='text-center pointer-events-none'>
          <span className='pointer-events-auto text-[16px] underline underline-offset-8 hover:text-gray-500'>
            회원가입
          </span>
        </Link>
      </form>
    </div>
  )
}

export default Login
