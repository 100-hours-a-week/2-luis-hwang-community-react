import { useEffect } from 'react'
import { useSessionStore } from '../store/user'
import { useNavigate } from 'react-router-dom'
import { sendLogout } from '../api/user'

const Logout = () => {
  const { session, removeSession } = useSessionStore()
  console.log(session)
  const navigate = useNavigate()

  useEffect(() => {
    // 서버에 현재 세션 아이디를 보내 로그아웃을 알리고 클라이언트에서 세션 삭제
    sendLogout({ sid: session.sid })
      .then(() => removeSession())
      .catch((err) => console.error(err))
      .finally(() => navigate('/login'))
  }, [navigate])

  return <div></div>
}

export default Logout
