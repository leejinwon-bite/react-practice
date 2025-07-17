import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
           <div className='footer-content'>
                <div className='col left'>
                            <div className='col center'> {/*custom*/}
                                <ul className='footer-nav'>
                                    <li><a href='#'>매장안내</a></li>
                                    <li><a href='#'>이용약관</a></li>
                                    <li><a href='#'>개인정보 취급방침</a></li>
                                    <li><a href='#'>이용안내</a></li>
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
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                </ul>
                            </div>
                            <div className='col center'>
                                <h2>커뮤니티</h2>
                                <p><a href='/notice'>공지사항</a></p>
                                <p><a href='#'>이벤트</a></p>
                                <p><a href='#'>상품 Q&A</a></p>
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