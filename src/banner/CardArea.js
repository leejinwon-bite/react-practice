import "../App.css";

const CardArea = () => {
    return (
        <div id="choice">
            <h2 className="title">타입별 선택 가이드</h2>
            <div className="choice-content">
                <div className="card">
                    <h3>너티드 커피</h3>
                    <p>고소한, 구수한, 산미가 약한 커피</p>
                    <div className="bean-img">
                        <img src="images/beans.png" alt=""></img>
                    </div>
                </div>
                <div className="card">
                    <h3>비비드 커피</h3>
                    <p>꽃, 허브, 과일, 산미가 있는 커피</p>
                    <div className="bean-img">
                        <img src="images/beans.png" alt=""></img>
                    </div>
                </div>
                <div className="card">
                    <h3>다크 커피</h3>
                    <p>쌉쌀한, 달콤한, 산미가 없는 커피</p>
                    <div className="bean-img">
                        <img src="images/beans.png" alt=""></img>
                    </div>
                </div>
                <div className="card">
                    <h3>로스터가 추천하는 커피</h3>
                    <div className="bean-img">
                        <img src="images/beans.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CardArea;