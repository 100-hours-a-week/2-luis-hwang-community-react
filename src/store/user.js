import { create } from 'zustand'
import { getJsonDataFromStorage, saveJsonDataToStorage } from '../utils/utils'

/**
 * 유저 상태를 전역으로 관리
 * -> 추후 배포 및 https 적용하고 쿠키 기반으로 변경 예정
 */
export const useSessionStore = create((set, get) => ({
  session: getJsonDataFromStorage('session'),
  setSession: ({ email, sid, profileImg }) => {
    const ses = { email, sid, profileImg }
    saveJsonDataToStorage('session', ses)
    set((state) => ({ ...state, session: ses }))
  },
  removeSession: () => {
    localStorage.removeItem('session')
    set((state) => ({ ...state, session: null }))
  },
  isAuthenticated: () => {
    const state = get()
    return state.session !== null
  },
}))
