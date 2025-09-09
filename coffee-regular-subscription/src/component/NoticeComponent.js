import { useEffect, useState, useCallback } from "react";
import { getPaging } from "../API/Axios";
import CustomMove from "../hook/CustomMove";
import PagingComponent from "./PagingComponent";
import { useNavigate } from "react-router-dom";

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
  pageNum: 0,
  size: 0,
  navigatePages: 0,
  navigatepageNums: []
}
const NoticeComponent = () => {
  const { page, size, moveToList } = CustomMove();
  const [pagingVariables, setPagingVariables] = useState(initState)
  useEffect(() => {
    getPaging({ page, size }).then(data => {
      setPagingVariables(data);
    })
  }, [page, size])

  const navigate = useNavigate()
  const handleClickDetail = useCallback(() => { 
      navigate({ pathname: 'detail' })
      }, [navigate])
  return (
    <section>
      <div>
        {
          pagingVariables.list.map((board) => (
            <div key={board.id}>
              <span onClick={handleClickDetail}>제목: {board.boardTitle} </span>
              <span>글쓴이: {board.boardWriter} </span>
              <span>만든시간: {board.createdAt} </span>
              <span>첨부파일: {board.fileAttached} </span>
              <hr />
            </div>
          ))
          
        }
      </div>
      <PagingComponent pagingVariables={pagingVariables}
       moveToList={moveToList} />
    </section>
  )
}

export default NoticeComponent;