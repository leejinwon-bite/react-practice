import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Footer = () => {

    const navigate = useNavigate()
    const handleClickDetail = useCallback(() => { 
      navigate({ pathname: 'detail' })
      }, [navigate])
    const hadleClickNotice = useCallback(() => { 
      navigate({ pathname: 'notice' })
      }, [navigate])  

    return (
        <footer>
           <div className='footer-content'>
                <div className='col left'>
                            <div className='col center'> {/*custom*/}
                                <ul className='footer-nav'>
                                    <li><div className='link' onClick={handleClickDetail}>매장안내</div></li>
                                    <li><div className='link' onClick={handleClickDetail}>이용약관</div></li>
                                    <li><div className='link' onClick={handleClickDetail}>개인정보 취급방침</div></li>
                                    <li><div className='link' onClick={handleClickDetail}>이용안내</div></li>
                                </ul>
                                <ul className='footer-info'>
                                    <p>상호: 섹시와보이시 (대표 : 홍길동)</p>
                                    <p>사업자등록번호 : 220-81-56117</p>
                                    <p>주소: 제주특별자치도 제주시 해안마을 5길</p>
                                    <p>전화번호 : 1588-0000</p>
                                </ul>
                            </div>    
                            <div className='col center'>
                                <h2>고객센터</h2>
                                <h3>070-000-0000</h3>
                                <p>월~금 09:00 - 18:00</p>
                                <ul className='socials'>
                                    <li><div className='link' onClick={handleClickDetail}><FontAwesomeIcon icon={faInstagram} /></div></li>
                                    <li><div className='link' onClick={handleClickDetail}><FontAwesomeIcon icon={faSquareFacebook} /></div></li>
                                    <li><div className='link' onClick={handleClickDetail}><FontAwesomeIcon icon={faYoutube} /></div></li>
                                </ul>
                            </div>
                            <div className='col center'>
                                <h2>커뮤니티</h2>
                                <p><span className='link' onClick={hadleClickNotice}>공지사항</span></p>
                                {/* 밑에 코드는 css를 부모로 부터 상속 안해서 흰색 배경이 나옴. 위에껀 빨간색 글자, 검정 배경 상속 */}
                                {/* <p><a href='../notice' className='link'>공지사항</a></p> */}
                                <p><span className='link' onClick={handleClickDetail}>이벤트</span></p>
                                <p><span className='link' onClick={handleClickDetail}>상품 Q&A</span></p>
                            </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2025 Sexy and Boyish. All rights reserved.</p>
                    {/* All rights reserved. 의 의미는 무단 전재와 무단 복제를 금합니다. */}
                </div>
           </div> 
        </footer>
    );
}

export default Footer;