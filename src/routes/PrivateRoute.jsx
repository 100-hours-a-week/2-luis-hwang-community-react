import { Navigate, Outlet } from 'react-router-dom'
import { useSessionStore } from '../store/user'

const PrivateRoute = () => {
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated())
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
