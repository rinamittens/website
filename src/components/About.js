import React from 'react'
import "../css/About.css"

const About = (props) => {
  return (
    <div className='about'>
      <div className='aboutChild'>
          <div className="aboutScript"><img src={require("../media/script2/About.png")} alt='about'></img></div>

            <div className="rinaPortrait">
              <img id="portrait" src={require("../media/Descriptions/Face_Square.jpg")} alt='facesquare'></img>
              <a href="https://www.instagram.com/rinagoldfish/?hl=en">
              <div className="rinaBio"><img src={require("../media/Descriptions/RinaBio.png")} alt='bio' /></div>
              <div className="mobileRinaBio">
              <img src={require("../media/mobilebio/biopart1.png")} alt='bio' />
              <img src={require("../media/mobilebio/biopart2.png")} alt='bio' />
              <img src={require("../media/mobilebio/biopart3.png")} alt='bio' />
              <img src={require("../media/mobilebio/biopart4.png")} alt='bio' />
              </div>
              <img id="instagram" src={require("../media/Descriptions/Instagram.png")} alt='instagram'></img></a>
              <a href="https://www.linkedin.com/in/rina-goldfield-5a9068aa/">
              <img id="linkedin" src={require("../media/Descriptions/LinkedIn.png")} alt='linkedin'></img></a>

        </div>
      </div>
    </div>
  )
}


export default About;
