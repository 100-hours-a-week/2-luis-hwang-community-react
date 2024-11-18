import { useNavigate } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import { useCallback } from 'react'

/* BoardList에 리스팅할 카드 컴포넌트 */
const BoardCard = ({ boardId, title, like, review, views, createdAt, writer, writerImg }) => {
  const navigate = useNavigate()

  const handleBoardClick = useCallback(
    (e) => {
      e.preventDefault()
      navigate(`/boards/${boardId}`)
    },
    [navigate],
  )

  return (
    <div
      onClick={handleBoardClick}
      className='w-[590px] min-w-[590px] h-[180px] min-h-[180px] cursor-pointer p-6 border-2 z-10 rounded-lg hover:bg-gray-100'
    >
      <div className='flex flex-col gap-2'>
        <section>
          <h2 className='text-xl font-bold w-full truncate max-w-[26ch] overflow-hidden whitespace-nowrap'>
            {title}
          </h2>
        </section>
        <section>
          <div className='flex flex-row justify-between'>
            <div>
              <span>좋아요 {like}&nbsp;&nbsp;</span>
              <span>댓글 {review} &nbsp;&nbsp;</span>
              <span>조회수 {views}</span>
            </div>
            <div>{createdAt}</div>
          </div>
        </section>
        <hr className='my-1 bg-gray-300 h-1' />
        <section>
          <div className='flex flex-row justify-start items-center gap-4'>
            <UserAvatar radius='48px' imgSrc={writerImg} />
            <p className='font-bold'>{writer}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BoardCard
