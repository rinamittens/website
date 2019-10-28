import React from 'react'
import "../css/Banners.css"
import ReactGA from 'react-ga';
ReactGA.initialize('G-NCTQD21PGF');
ReactGA.pageview(window.location.pathname + window.location.search);

const Banners = (props) => {
  return (
    <div className='banners'>
      <div className="bannersScript"><img src={require("../media/script2/Banners.png")} alt='about'></img></div>
    <ul className="bannerList">
      <li><img src={require("../media/Banners/Banner 1.jpg")} alt='banner1'></img></li>
      <li><img src={require("../media/Descriptions/Banners/JusticeLove.png")} alt='banner2'></img></li>
      <li><img src={require("../media/Banners/Banner 2.jpg")} alt='banner2'></img></li>
      <li><img src={require("../media/Descriptions/Banners/Dare.png")} alt='banner2'></img></li>
      <li><img src={require("../media/Banners/Banner 3.jpg")} alt='banner3'></img></li>
      <li><img src={require("../media/Descriptions/Banners/ExpandBushMind.png")} alt='banner2'></img></li>
      <li><img src={require("../media/Banners/Banner 4.jpg")} alt='banner4'></img></li>
      <li><img src={require("../media/Descriptions/Banners/BlessedPeace.png")} alt='banner2'></img></li>
      </ul>
    </div>
  )
}


export default Banners;
