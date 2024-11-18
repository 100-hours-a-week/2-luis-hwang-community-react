import { create } from 'zustand'

/* 유저 상태를 전역으로 관리 */
export const useSessionStore = create((set, get) => ({
  session: {
    sid: localStorage.getItem('sid'),
    email: localStorage.getItem('email'),
  },
  setSession: ({ email, sid }) => {
    set({ email, sid })
    localStorage.setItem('sid', sid)
    localStorage.setItem('email', email)
  },
  removeSession: () => {
    set({ email: null, sid: null })
    localStorage.removeItem('sid')
    localStorage.removeItem('email')
  },
  isAuthenticated: () => {
    const state = get()
    return state.session.sid !== null && state.session.email !== null
  },
}))