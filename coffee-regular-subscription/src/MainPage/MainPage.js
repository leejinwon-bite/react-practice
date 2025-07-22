
import '../App.css';
import BannerL from "../banner/BannerL.js";
import Header from '../header/Header.js';
import Membership from '../banner/Membership.js';
import CardArea from '../banner/CardArea.js';
import FAQ from '../banner/FAQ.js';
import Footer from '../footer/Footer.js';
const MainPage = () => {

    return (
      <div>
        <Header/>
        <BannerL/>
        <Membership/>
        <CardArea/>
        <FAQ/>
        <Footer/>
      </div>
    );
}

export default MainPage;