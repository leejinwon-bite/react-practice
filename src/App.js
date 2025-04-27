// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <body>
      <header>
        <nav>
          <h1 className="logo">원두정기구독</h1>
          <div>
            <button className='lang'><FontAwesomeIcon icon={faGlobe} />
            한국어</button>
            <button>로그인</button>
          </div>
        </nav>
      </header>
    </body>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> hi~~
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
