import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_AES_SECRET_KEY

/**
 * 이메일 형식 검사 (RFC 5322 표준)
 * @param {string} email 검사할 이메일
 * @returns {boolean} 이메일이 조건에 부합하면 true
 * @description '@'를 기준으로 앞에는 적어도 하나의 문자, 뒤에는 '.'으로 구분된 두 부분이 존재
 * */
export function checkEmail(email) {
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
  return (
    password.length >= 8 &&
    password.length <= 20 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  )
}

/**
 * 문자열 암호화 함수
 * @param {string} str 암호화할 문자열
 * @returns {string} 암호화된 문자열
 * @description AES 대칭키 암호화
 */
export function encrypt(str) {
  return CryptoJS.AES.encrypt(str, SECRET_KEY).toString()
}

/**
 * 문자열 복호화 함수
 * @param {string} cipherStr 암호화된 문자열
 * @returns {string} 복호화된 문자열
 * @description AES 대칭키 복호화
 */
export function decrypt(cipherStr) {
  const bytes = CryptoJS.AES.decrypt(cipherStr, SECRET_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}

/**
 * LocalStorage에 JSON 문자열을 저장할 때 암호화해서 저장
 * @param {string} key 저장할 데이터 키
 * @param {JSON} json 저장할 데이터 값
 * @description
 */
export function saveJsonDataToStorage(key, json) {
  const encryptedStr = encrypt(JSON.stringify(json))
  localStorage.setItem(key, encryptedStr)
}

/**
 * LocalStorage에서 JSON 문자열을 꺼내와서 복호화한 뒤 파싱해서 반환
 * @param {string} key 꺼내올 데이터 키
 * @returns {JSON} 복호화한 뒤 파싱한 JSON
 * @description
 */
export function getJsonDataFromStorage(key) {
  const value = localStorage.getItem(key)

  if (value === null) {
    return null
  }

  try {
    const decryptedStr = decrypt(value)
    return JSON.parse(decryptedStr)
  } catch (err) {
    return null
  }
}
