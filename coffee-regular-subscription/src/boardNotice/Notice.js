import { useNavigate } from "react-router-dom"
import { useCallback } from "react";
import { Outlet } from "react-router-dom";

const Notice = () => {

    // 비동기 방식으로 페이지를 이동하기 위해 useNavigate 훅을 사용합니다.
    const navigate = useNavigate()
    const handleClickList = useCallback(() => {
    navigate({ pathname: 'save' })
  })
    const handleClickDetail = useCallback(() => { 
    navigate({ pathname: 'detail' })
    })

    return (
        <section>
            <div>
                <h1>Notice Board</h1>
                <p>This is the notice board where you can find important announcements and updates.</p>
            </div>

            <h2>글 목록</h2>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><a></a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            <div onClick={handleClickList}>게시글 작성</div>
            <Outlet/ ><br /><br />
            <div onClick={handleClickDetail}>게시글 상세보기</div>
            
        </section>    
    );
}

export default Notice;