const Loading = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
      <div
        className='spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-transparent border-solid rounded-full'
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
