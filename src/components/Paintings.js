import React from 'react'
import "../css/Paintings.css"


const Paintings = (props) => {
  return (
    <div className='paintings'>
      <div className="paintScript"><img src={require("../media/script2/Paintings.png")} alt='paintings'></img></div>
      <ul className="paintList">
      <li><img src={require("../media/Paintings/1. Mountain.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/1a.medusalight.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/2. Medusa.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/3a. Worm Pizza heart.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/4. Cookie Monster.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/5. Worm Field.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/3. Listening for the Sea.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/6. Two Columns.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/7. Artemis Triumphant.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/8. Patience.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/9. Artemis Window.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/9. Jukay and His Mom.jpg")} alt='paint1'></img></li>
      </ul>
    </div>
  )
}


export default Paintings;
