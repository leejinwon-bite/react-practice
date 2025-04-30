import '../App.css'; /*상위 디렉터는 ..처럼 한다.*/
const BannerL = () => { 
    return (
        <section id="banner">
            <div className="banner-content">
                <h3>정성을 다해 로스팅한 커피를 매주 보내드립니다.</h3>
                <p>스위커 매장의 맛있는 커피를 집에서도 즐기세요</p>
                <button>자세히 알아보기</button>
            </div>
            <h2>지금 막 로스팅 했어요</h2>
            <select className='select-menu'>
                <option value='light'>라이트 로스트</option>
                <option value='medium'>미디엄 로스트</option>
                <option value='dark'>다크 로스트</option>
            </select>
        </section>
    );
}

export default BannerL;