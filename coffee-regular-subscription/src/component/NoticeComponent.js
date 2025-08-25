import { useEffect, useState } from "react";
import { getPaging } from "../API/Axios";
import CustomMove from "../hook/CustomMove";

const initState = {
  // dtoList: [],
  list: [],
  // pageNumList: [],
  // pageRequestDTO: null,
  // prev: false,
  hasPreviousPage: false,
  // next: false,
  hasNextPage: false,
  // totalCount: 0,
  total: 0,
  // prevPage: 0,
  prePage: 0,
  // nextPage: 0,
  nextPage: 0,
  // totalPage: 0,
  pages: 0,
  // current: 0
  pageNum: 0
}
const NoticeComponent = () => {
  const { page, size } = CustomMove();
  const [pagingVariables, setPagingVariables] = useState(initState)
  useEffect(() => {
    getPaging({ page, size }).then(data => {
      setPagingVariables(data);
    })
  }, [page, size])
  return (
    <section>
      <div>
        {
          pagingVariables.list.map((board) => (
            <div key={board.id}>
              <span>제목: {board.boardTitle} </span>
              <span>글쓴이: {board.boardWriter} </span>
              <span>만든시간: {board.createdAt} </span>
              <span>첨부파일: {board.fileAttached} </span>
              <hr />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default NoticeComponent;