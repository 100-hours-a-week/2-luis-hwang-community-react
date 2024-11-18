import axiosInstance from '.'

/* 게시글 추가, 조회, 삭제 등 API */

/* 게시글 목록 조회 */
export const fetchBoardList = ({ pageParam, limit }) => {
  const data = dummy.filter(
    (board) => board.boardId >= pageParam && board.boardId < pageParam + limit,
  )
  return Promise.resolve({ data, nextPage: pageParam + limit, hasMore: data.length === limit })
}

const dummy = [
  {
    boardId: '1',
    title: '제목1',
    createdAt: '2021-01-01 00:00:00',
    like: 1,
    review: 2,
    views: 3,
    writer: 'luis.hwang',
    writerImg: 'http://asd.com',
  },
  {
    boardId: '2',
    title: '제목2',
    createdAt: '2021-01-01 00:00:00',
    like: 1,
    review: 2,
    views: 3,
    writer: 'luis.hwang',
    writerImg: 'http://asd.com',
  },
  {
    boardId: '3',
    title: '제목3',
    createdAt: '2021-01-01 00:00:00',
    like: 1,
    review: 2,
    views: 3,
    writer: 'luis.hwang',
    writerImg: 'http://asd.com',
  },
  {
    boardId: '4',
    title: '제목4',
    createdAt: '2021-01-01 00:00:00',
    like: 1,
    review: 2,
    views: 3,
    writer: 'luis.hwang',
    writerImg: 'http://asd.com',
  },
  {
    boardId: '5',
    title: '제목5',
    createdAt: '2021-01-01 00:00:00',
    like: 1,
    review: 2,
    views: 3,
    writer: 'luis.hwang',
    writerImg: 'http://asd.com',
  },
]
