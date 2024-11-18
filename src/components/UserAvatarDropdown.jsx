import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'

const UserAvatarDropdown = ({ className: _className, radius, imgSrc }) => {
  const className = [_className, 'relative dropdown group inline-block'].join(' ')

  return (
    <div className={className}>
      <UserAvatar radius={radius} imgSrc={imgSrc} />
      <div className='absolute dropdown-menu dropdown-menu-1 group-hover:block hidden h-auto'>
        {DropdownMenu.map(({ title, to }, index) => (
          <Link
            key={index}
            to={to}
            className='block px-4 py-4 w-[150px] text-gray-700 bg-[#E9E9E9] hover:bg-gray-100'
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  )
}

const DropdownMenu = [
  {
    title: '회원정보수정',
    to: '/users/edit',
  },
  {
    title: '비밀번호수정',
    to: '/users/edit/pw',
  },
  {
    title: '로그아웃',
    to: '/logout',
  },
]

export default UserAvatarDropdown
