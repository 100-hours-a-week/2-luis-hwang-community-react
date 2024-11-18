import UserAvatar from './UserAvatar'

const UserAvatarDropdown = ({ className, radius, imgSrc }) => {
  return (
    <div className={className}>
      <UserAvatar radius={radius} imgSrc={imgSrc} />
    </div>
  )
}

export default UserAvatarDropdown
