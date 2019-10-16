import React from 'react'
import "../css/About.css"

const About = (props) => {
  return (
    <div className='about'>
    <div className='aboutChild'>
      <div className="aboutScript"><img src={require("../media/script2/About.png")} alt='about'></img></div>
    <div className="bioPortrait">  
      <div className="rinaPortrait"><img src={require("../media/Descriptions/Face_Square.jpg")} alt='facesquare'></img></div>
      <div className="rinaBio"><img src={require("../media/Descriptions/RinaBio.png")} alt='bio'></img></div>
    </div>
    </div>
    </div>
  )
}


export default About;
