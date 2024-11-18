/**
 * 이메일 형식 검사
 * @param {string} email 검사할 이메일
 * @returns {boolean} 이메일이 조건에 부합하면 true
 * @description '@'를 기준으로 앞에는 적어도 하나의 문자, 뒤에는 '.'으로 구분된 두 부분이 존재
 * */
export function checkEmail(email) {
  // RFC 5322 표준을 준수하는 이메일 형식
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

/**
 * 비밀번호 형식 검사
 * @param {string} password 검사할 비밀번호
 * @returns {boolean} 비밀번호가 조건에 부합하면 true
 * @description 8자 ~ 20자 길이, 대/소문자, 숫자, 특수문자 최소 1개 이상 포함
 */
export function checkPassword(password) {
  if (password.length < 8 || password.length > 20) {
    return false
  }

  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  )
}
