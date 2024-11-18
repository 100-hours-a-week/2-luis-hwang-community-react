import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

/* BoardList에 리스팅할 카드 컴포넌트 */
const BoardCard = ({ boardId, title, like, review, views, createdAt, writer, writerImg }) => {
  const navigate = useNavigate()

  const handleOnCardClick = useCallback((e) => {
    e.preventDefault()
    navigate(`/board/${boardId}`)
  })

  /* 카드 디자인 */
  const boardCardClassName = [
    'w-[590px] min-w-[590px] h-[180px] min-h-[180px] bg-gray-300 cursor-pointer p-6',
  ].join(' ')

  return (
    <div onClick={handleOnCardClick} className={boardCardClassName}>
      <h2>{title}</h2>
    </div>
  )
}

export default BoardCard
