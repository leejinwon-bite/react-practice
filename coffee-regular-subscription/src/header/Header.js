import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
    <header>
        <nav>
          <h1 className="logo">원두정기구독</h1>
          <div>
            <button className='lang'><FontAwesomeIcon icon={faGlobe} className="hi"/>
            한국어<FontAwesomeIcon icon={faCaretDown} className="hi"/></button>
            <button>로그인</button>
          </div>
        </nav>
        <div className='header-content'>
          <h2>매일 특별한 커피 타임</h2>
          <h3>고객님의 취향에 맞게 스페셜 커피를 즐겨 보세요</h3>
          <p>이메일 주소를 보내시면 구독 안내문과 새로운 소식들을 보내 드립니다.</p>
          <form className='add-email'>
            <input type='email' placeholder='이메일 주소' required></input>
            <button type='submit'>궁금해용</button>
          </form>
        </div>
      </header>
    );
}

export default Header;