import React from 'react'
import "../css/Drawings.css"

const Drawings = (props) => {
  return (
    <div className='drawings'>
    <div className="drawScript"><img src={require("../media/script2/Drawings.png")} alt='drawingsimg'></img></div>
    <ul className="drawList">
    <li className="needGap"><img src={require("../media/Drawings/1. Nose1.jpg")} alt='drawing1'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/2. Nose2.jpg")} alt='drawing2'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/3. Sweet 'n low installation shot.jpg")} alt='drawing3'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/4. SweetnLow2.jpg")} alt='drawing4'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/5. SweetnLow3.jpg")} alt='drawing5'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/6. SweetnLow4.jpg")} alt='drawing1'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/7. SweetnLow5.jpg")} alt='drawing1'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/8. Diana diptych.jpg")} alt='drawing1'></img></li>
    <li className="needGap"><img src={require("../media/Drawings/9. Diana diptych 1.jpg")} alt='drawing1'></img></li>
    <li><img src={require("../media/Drawings/9. Diana diptych 2.jpg")} alt='drawing1'></img></li>
    </ul>
    </div>
  )
}


export default Drawings;
