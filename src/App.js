// import logo from './logo.svg';
import './App.css';
import BannerL from "./banner/BannerL.js";
import Header from './header/Header.js';
import Membership from './banner/Membership.js';
import CardArea from './banner/CardArea.js';
import FAQ from './banner/FAQ.js';


function App() {
  return (
    <body>
      <Header/>
      <BannerL/>
      <Membership/>
      <CardArea/>
      <FAQ/>
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
