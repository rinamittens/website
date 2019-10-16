import React from 'react'
import "../css/Banners.css"

const Banners = (props) => {
  return (
    <div className='banners'>
      <div className="bannersScript"><img src={require("../media/script2/Banners.png")} alt='about'></img></div>
    <ul className="bannerList">
      <li><img src={require("../media/Banners/Banner 1.jpg")} alt='banner1'></img></li>
      <li><img src={require("../media/script/Banner 1 desc.png")} alt='banner2'></img></li>
      <li><img src={require("../media/Banners/Banner 2.jpg")} alt='banner2'></img></li>
      <li><img src={require("../media/script/Banner 2 desc.png")} alt='banner2'></img></li>
      <li><img src={require("../media/Banners/Banner 3.jpg")} alt='banner3'></img></li>
      <li><img src={require("../media/Banners/Banner 4.jpg")} alt='banner4'></img></li>
      </ul>
    </div>
  )
}


export default Banners;
