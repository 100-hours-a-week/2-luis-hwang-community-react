import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { fetchBoardList } from '../api/board'

const useBoard = () => {
  const limit = 10
  const navigate = useNavigate()

  /* 게시글 리스트 가져오기 */
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['board-list'],
    queryFn: async ({ pageParam = 1 }) => await fetchBoardList({ pageParam, limit }),
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
  })

  /* 게시글 추가 버튼 클릭 핸들러 */
  const handleBoardAddBtnClick = (e) => {
    e.preventDefault()
    navigate('/boards/add')
  }

  return {
    boardList: data?.pages.flatMap((page) => page.data) || [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    handleBoardAddBtnClick,
  }
}

export default useBoard
