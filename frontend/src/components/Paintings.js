import React from 'react'
import "../css/Paintings.css"

const Paintings = (props) => {
  return (
    <div className='paintings'>
      <h1 className="paintScript"><img src={require("../media/script/Paintings.png")} alt='paintings'></img></h1>
      <ul className="paintList">
      <li><img src={require("../media/Paintings/1. Mountain.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/2. Medusa.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/3. Listening for the Sea.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/4. Cookie Monster.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/5. Worm Field.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/6. Two Columns.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/7. Artemis Triumphant.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/8. Patience.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/9. Artemis Window.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/9. Jukay and His Mom.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/10. Pasta.jpg")} alt='paint1'></img></li>
      <li><img src={require("../media/Paintings/11. Flowerama.jpg")} alt='paint1'></img></li>
      </ul>
    </div>
  )
}


export default Paintings;

// <li><p className="paintScript4">"Portrait of Jukay and his Mother", Oil on canvas on panel, 30" x 24" </p></li>

// <li><p className="paintScript3">"Medusa", Oil on canvas on panel, 24" x 24" </p></li>

// <li><p className="paintScript2">"Worm Contemplates Mountain", Oil on canvas on panel, 30" x 24" </p></li>
