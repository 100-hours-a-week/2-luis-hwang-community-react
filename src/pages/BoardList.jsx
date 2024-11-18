import { useEffect, useRef } from 'react'
import BoardCard from '../components/BoardCard'
import Loading from '../components/Loading'
import useBoard from '../hooks/useBoard'

const BoardList = () => {
  // prettier-ignore
  const {
    boardList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    handleBoardAddBtnClick
  } = useBoard()

  /* Intersection Observer로 무한 스크롤 구현 */
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 },
    )

    if (observerRef.current) observer.observe(observerRef.current)

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <div className='w-full'>
      {isFetchingNextPage && <Loading />}
      <div>
        <header className='text-xl text-center'>
          <p>안녕하세요,</p>
          <p>
            아무 말 대잔치 <span className='font-bold'>게시판</span> 입니다.
          </p>
        </header>
      </div>

      <div className='mt-12 h-auto flex flex-col justify-center items-center gap-8'>
        <input
          type='button'
          value='게시글 작성'
          className='bg-[#ACA0EB] hover:bg-[#7F6AEE] text-white w-[128px] h-[48px] rounded-2xl cursor-pointer text-center ml-[460px]'
          onClick={handleBoardAddBtnClick}
        />
        <section className='flex flex-col items-center justify-center gap-6'>
          {boardList.map(
            ({ boardId, title, createdAt, like, review, views, writer, writerImg }, index) => (
              <BoardCard
                key={index}
                boardId={boardId}
                title={title}
                createdAt={createdAt}
                like={like}
                review={review}
                views={views}
                writer={writer}
                writerImg={writerImg}
              />
            ),
          )}
        </section>
        <div ref={observerRef} style={{ height: '5px' }}></div>
      </div>
    </div>
  )
}

export default BoardList
