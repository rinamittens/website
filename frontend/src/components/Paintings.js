import React from 'react'
import "../css/Paintings.css"

const Paintings = (props) => {
  return (
    <div className='paintings'>
      <h1 className="paintScript"><img src={require("../media/script/Paintings.png")} alt='paintings'></img></h1>
      <ul className="paintList">
      <li><img src={require("../media/Paintings/Paint 1.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 2.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 3.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 4.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 5.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 6.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 7.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 8.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 9.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 10_1.JPG")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/Paint 11.jpg")} alt='paint1'></img></li>
      </ul>
    </div>
  )
}


export default Paintings;
