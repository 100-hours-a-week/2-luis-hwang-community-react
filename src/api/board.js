import { HttpStatusCode } from 'axios'
import axiosInstance from '.'

/* 게시글 추가, 조회, 삭제 등 API */

/* 게시글 목록 조회 */
export const fetchBoardList = async ({ pageParam, limit }) => {
  const res = await axiosInstance.get(`/boards?page=${pageParam}&limit=${limit}`)
  if (res.status !== HttpStatusCode.Ok) {
    return Promise.reject()
  }
  return Promise.resolve(res.data)
}
