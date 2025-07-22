import DetailComponent from "../component/DetailComponent";
import { useParams } from "react-router-dom";

const Detail = () => {

    // useParams는 현재 URL의 파라미터를 가져오는 훅
    // 예를 들어 URL이 /detail/1이라면, id는 1이 됨.
    const { id } = useParams();
    return(

        <div>
            <div>
                <h1>detail page {id}</h1>
            </div>

{/* 여러개의 Component를 만들고 각각 API함수를 다르게 사용할 수 있어서
부모만들고 자식 컴포를 여러개 만드는게 맞음. */}
            <DetailComponent id={id}></DetailComponent>
        </div>
    );
}

export default Detail;