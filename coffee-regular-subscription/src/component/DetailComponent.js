import { useEffect, useState } from "react";
import { getBoardDTO } from "../API/Axios";
import CustomMove from "../hook/CustomMove";

// server에 있는 DTO 필드
// 만약 서버에 있는 필드가 변경되면 여기도 변경해야함.
// .찍고 하나씩 꺼내 먹을 수 있음. 맛있음.
const initState = {
  id: 0,
  boardTitle: '',
  boardWriter: '',
  boardContents: '',
  createdAt: null,
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

  {/* html요소를 반복적으로 만들때 함수를 이용한것 1, 2번 매개는 각각
    return문에 나오는 애들하고 매핑된 애들임. */}
  const makeDiv = (key, value) => {
    return (
      <div>
        <strong>@{key}</strong>: {value}
      </div>
    )
  }

  const {moveToList} = CustomMove();

  return (
   <div>
        {/* <div>boardContents: {board.boardContents}</div>
        <div>boardTitle: {board.boardTitle}</div>
        <div>boardWriter: {board.boardWriter}</div>
        <div>createdAt: {board.createdAt}</div>
        <div>fileAttached: {board.fileAttached}</div>
        <div>id: {board.id}</div> */}

        {/* html요소를 반복적으로 만들때 함수를 이용한것 */}
        {makeDiv('id', board.id)}
        {makeDiv('boardTitle', board.boardTitle)}
        {makeDiv('boardWriter', board.boardWriter)}
        {makeDiv('boardContents', board.boardContents)}
        {makeDiv('createdAt', board.createdAt)}
        {makeDiv('fileAttached', board.fileAttached)}

        <button onClick={()=>{moveToList()}}>Notice</button>
   </div>
  )
}


export default DetailComponent;