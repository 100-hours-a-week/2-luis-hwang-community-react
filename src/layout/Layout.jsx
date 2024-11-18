import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = document.getElementById('header')
    if (header) setHeaderHeight(header.offsetHeight)
  }, [])

  return (
    <div className='h-screen'>
      <header id='header' className='py-6 h-20 font-semibold text-3xl font-serif text-center'>
        아무 말 대잔치
      </header>
      <hr className='border-gray-200 border-y-2' />

      <main
        style={{ height: `calc(100vh - ${headerHeight + 5}px)` }}
        className='flex flex-col justify-center items-center'
      >
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
