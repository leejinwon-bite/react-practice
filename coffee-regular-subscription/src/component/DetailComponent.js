import { useEffect, useState } from "react";
import { getBoardDTO } from "../API/Axios";

// server에 있는 DTO 필드
// 만약 서버에 있는 필드가 변경되면 여기도 변경해야함.
// .찍고 하나씩 꺼내 먹을 수 있음. 맛있음.
const initState = {
  id: 0,
  boardTitle: '',
  boardWriter: '',
  boardContents: '',
  createdAT: null,
  fileAttached: 0
}

function DetailComponent({ id }) {

  const [board, setBoard] = useState(initState);
  
  useEffect(() => {
    getBoardDTO(id).then(data => {
      console.log(data)
      setBoard(data)
    })
  }, [id])

  return (
   <div>
        <div>boardContents: {board.boardContents}</div>
        <div>boardTitle: {board.boardTitle}</div>
        <div>boardWriter: {board.boardWriter}</div>
        <div>createdAT: {board.createdAT}</div>
        <div>fileAttached: {board.fileAttached}</div>
        <div>id: {board.id}</div>
   </div>
  )
}


export default DetailComponent;