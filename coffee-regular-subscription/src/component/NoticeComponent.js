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
  // useCallback매개에 id라는 매개를 넣음. event를 했을 경우엔 url에 undefined가 들어감.
  const handleClickDetail = useCallback((id) => { 
      navigate({ pathname: `detail/${id}` })
      }, [navigate])
  return (
    <section>
      <div>
        {
          pagingVariables.list.map((board) => (
            // Yes, onClick={() => handleClickDetail(board.id)} creates a new function each render. 
            //  Use this when:
// - You need to pass custom arguments to the handler.
// - You want to wrap logic or conditionals before calling the actual function.
            <div key={board.id} onClick={ () => {
              handleClickDetail(board.id); 
              console.log("board.id =", board.id);
              } }>
              <span>제목: {board.boardTitle} </span>
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