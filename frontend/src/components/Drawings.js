import React from 'react'
import "../css/Drawings.css"

const Drawings = (props) => {
  return (
    <div className='drawings'>
    <h1 className="drawScript"><img src={require("../media/script/Drawings.png")} alt='drawingsimg'></img></h1>
    <ul className="drawList">
    <li><img src={require("../media/Drawings/1. Nose1.jpg")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/2. Nose2.jpg")} alt='drawing2'></img></li>
    <li><img src={require("../media/Drawings/3. Sweet 'n low installation shot.jpg")} alt='drawing3'></img></li>
    <li><img src={require("../media/Drawings/6. SweetnLow2.JPG")} alt='drawing4'></img></li>
    <li><img src={require("../media/Drawings/6. SweetnLow3.JPG")} alt='drawing5'></img></li>
    <li><img src={require("../media/Drawings/6. SweetnLow4.JPG")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/6. SweetnLow5.JPG")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/7. Diana diptych.jpg")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/8. Diana diptych 1.jpg")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/9. Diana diptych 2.jpg")} alt='drawing1'></img></li>
    </ul>
    </div>
  )
}


export default Drawings;
