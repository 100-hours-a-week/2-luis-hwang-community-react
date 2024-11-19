import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import UserAvatarDropdown from '../components/UserAvatarDropdown'
import PrevBtn from '../components/PrevBtn'
import { useSessionStore } from '../store/user'

const DO_NOT_SHOW_DROPDOWN = ['/login', '/signup']
const DO_NOT_SHOW_PREV_BTN = ['/login', '/', '/boards/edit']

const Layout = () => {
  const { pathname } = useLocation()
  const { session } = useSessionStore()

  const showDropdown = useMemo(
    () => DO_NOT_SHOW_DROPDOWN.find((path) => path === pathname) === undefined,
    [pathname],
  )

  const showPrevBtn = useMemo(
    () => DO_NOT_SHOW_PREV_BTN.find((path) => path === pathname) === undefined,
    [pathname],
  )

  return (
    <div className='h-screen min-w-[600px]'>
      <header className='py-6 h-20 w-full relative'>
        {showPrevBtn && (
          <PrevBtn className='absolute left-[calc(50%-240px)] top-1/2 transform -translate-y-1/2' />
        )}
        <h1 className='font-semibold text-3xl font-serif text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          아무 말 대잔치
        </h1>
        {showDropdown && (
          <UserAvatarDropdown
            radius='52px'
            imgSrc={session ? session.profileImg : ''}
            className='absolute left-[calc(50%+240px)] top-1/2 transform -translate-y-1/2'
          />
        )}
      </header>

      <hr className='border-gray-200 border-y-2' />

      <main className='flex flex-col justify-center items-center mt-[40px] w-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
