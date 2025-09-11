import { useEffect, useState } from 'react';
import { getBoardDTO, modifyBoard } from '../API/Axios';
import { useParams } from 'react-router-dom';

const initState = {
  id: 0,
  boardTitle: '',
  boardWriter: '',
  boardContents: '',
  createdAt: null,
  fileAttached: 0
}

// {id}는 훅에서 만든 url 경로의 파라메터를 의미함.
const Modify = () => {

    // useParams는 현재 URL의 파라미터를 가져오는 훅 만약 그냥 
    // const Modify = ({id}) => {.... 요런 식으로 써버리면 에러가 남.
    // 한참 해맸음. 위에 {id}는 pops를 의미함. 근데, 부모 컴포넌트 자체가
    // 없고, prop으로 넘겨준적도 없었었음. 햇갈리니 주의.
    const { id } = useParams();
    const [board, setBoard] = useState(initState);

    useEffect(() => {
        getBoardDTO(id).then(data => {
          console.log(data);
          setBoard(data);
        })
    }, [id]);

const handleModify = (event) => {
  event.preventDefault();
  // Your Axios PUT logic here
  modifyBoard(board);
};



    return (
        <section>
            <div>
                <h1>Modify</h1>
                <p>hello world!!</p>
                {/* form에서는 put 방식의 method 속성값을 사용못함.
                대신 get으로 자동으로 변환됨. onSubmit을 사용해서
                수정을한다. */}
                    <form onSubmit={handleModify}>
                       id: <input type="number" name="id" value={board.id} readOnly/><br />
                      boardTitle: <input type="text" name="boardTitle" value={board.boardTitle}
                         onChange={event => {
                            console.log(event.target.value);
                            setBoard({ ...board, boardTitle: event.target.value });
                            }}/><br />
                       boardWriter: <input type="text" name="boardWriter" value={board.boardWriter}
                        onChange={event => {
                            console.log(event.target.value);
                            setBoard({ ...board, boardWriter: event.target.value });
                        }}/><br />
                       boardContents <input type="text" name="boardContents" value={board.boardContents}
                        onChange={event => {
                            console.log(event.target.value);
                            setBoard({ ...board, boardContents: event.target.value });
                        }}/><br />
                        <input type="submit" value="Modify" />
                        <input type="submit" value="Delete" />
                    </form>
            </div>
        </section>
    );
}

export default Modify