import React from 'react'
import "../css/Collages.css"

const Collages = (props) => {
  return (
    <div className='collages'>
    <div className="collageScript"><img src={require("../media/script2/Collages.png")} alt='collagesimg'></img></div>
    <ul className="collageList">
    <li><img src={require("../media/Collages/Dog Bride 1.JPG")} alt='drawing1'></img></li>
    <li><img src={require("../media/Collages/Dog Bride 2.JPG")} alt='drawing2'></img></li>
    <li><img src={require("../media/Collages/Dog Bride 3.JPG")} alt='drawing3'></img></li>
    <li><img src={require("../media/Collages/Dog Bride 4.JPG")} alt='drawing4'></img></li>
    </ul>
    </div>
  )
}


export default Collages;
