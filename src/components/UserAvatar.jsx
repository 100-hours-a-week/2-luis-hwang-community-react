const UserAvatar = ({ radius, imgSrc }) => {
  return (
    <div
      style={{
        width: radius,
        height: radius,
        borderRadius: '50%',
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='bg-gray-200 cursor-pointer'
    ></div>
  )
}

export default UserAvatar
