import React from 'react'
import "../css/Banners.css"

const Banners = (props) => {
  return (
    <div className='banners'>
      <h1 className="bannersScript"><img src={require("../media/script/Banners.png")} alt='about'></img></h1>
      <img src={require("../media/Banners/Banner 1.jpg")} alt='banner1'></img>
      <img src={require("../media/Banners/Banner 2.jpg")} alt='banner2'></img>
      <img src={require("../media/Banners/Banner 3.jpg")} alt='banner3'></img>
      <img src={require("../media/Banners/Banner 4.jpg")} alt='banner4'></img>
    </div>
  )
}


export default Banners;
