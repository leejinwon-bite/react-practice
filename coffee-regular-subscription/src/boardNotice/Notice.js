import { useNavigate } from "react-router-dom"
import { useCallback } from "react";
import { Outlet } from "react-router-dom";
import NoticeComponent from "../component/NoticeComponent";

const Notice = () => {

    // 비동기 방식으로 페이지를 이동하기 위해 useNavigate 훅을 사용합니다.
    const navigate = useNavigate()
    const handleClickList = useCallback(() => {
    navigate({ pathname: 'save' })
  }, [navigate])
    const handleClickDetail = useCallback(() => { 
    navigate({ pathname: 'detail' })
    }, [navigate])

    return (
        <section>
            <div>
                <h1>Notice Board</h1>
                <p>This is the notice board where you can find important announcements and updates.</p>
            </div>

            <NoticeComponent />

            <div onClick={handleClickList}>게시글 작성</div>
            <Outlet/ ><br /><br />
            <div onClick={handleClickDetail}>게시글 상세보기</div>
            
        </section>    
    );
}

export default Notice;