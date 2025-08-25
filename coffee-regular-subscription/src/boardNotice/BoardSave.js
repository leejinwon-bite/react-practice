import { saveBoard } from "../API/Axios";
import { useState } from "react";

const initState = {
    id: 0,
  boardTitle: '',
  boardWriter: '',
  boardContents: '',
  createdAt: null,
  fileAttached: 0
}

const BoardSave = () => {
 
    // {...변수}는 새로운 객체를 만듦. 이유는 저장을 여러번 하기 위해서
    // 초기값을 유지하기 위해서. new 연산자 같은 느낌임.
    // {...board}는 board안에 있는 필드들을 가져온 후 {} 씌워서 새로운 객체만듬
    // 만약 안쓰면, initState 필드가 바뀐 그 상태로 유지됨. 초기값 활용 x
    // This is useful to avoid direct mutation and
    //  to initialize state with default values.
    // 위 영어 구문에서 1번째는 아마. id값도 있기 때문에 저장이아닌 수정
    // 이 되는 경우를 말하는 것 같음. 
     const [board, setBoard] = useState({ ...initState });

    const handleChangeBoard = (e) => {
    board[e.target.name] = e.target.value
    // 위에 {...initState}외에 또다른 빈객체 {...board}를 만듬. 총 2개의
    // 빈객체가 만들어짐. 이 애는 setBoard에 의해 board에 담겨서 board={...board}임. 
    setBoard({ ...board })
  }

    const Submit = (e) => {
        e.preventDefault();
        // 매개변수 안넣어줘서 한참 해맴. axios에도 매개있었음.
        // {...board}와 board는 똑같은 애를 의미함.
        saveBoard({ ...board })
        .then(result => {
        console.log(result)
        setBoard(result.id)
        setBoard({ ...initState })
      }).catch(e => {
        console.error(e)
      })
    }

    return(
       <section> 
        {/* @RestController의 상대경로로 넘어감. */}
            <form action="/save" method="post" >
                Title: <input type="text" name="boardTitle" required onChange={handleChangeBoard}  value={board.boardTitle}/><br />
                Writer: <input type="text" name="boardWriter" required onChange={handleChangeBoard}  value={board.boardWriter}/><br />
                Contents: <input type="text" name="boardContents" required onChange={handleChangeBoard}  value={board.boardContents}/><br />
                {/* Attached Files: <input type="file" name="boardFile" multiple /><br /> */}
                <button type="button" onClick={Submit}>저장</button>
            </form>
       </section> 
    );

}

export default BoardSave;