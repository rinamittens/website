import React from 'react';
import { Link } from 'react-router-dom'
import "../css/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="innerHome">
        <div >
            <div className="paintHome">
              <Link to='/paintings'><img src={require("../media/script2/Paintings.png")} alt='about'></img></Link>
            </div>
            <div className="drawHome">
              <Link to='/drawings'><img src={require("../media/script2/Drawings.png")} alt='about'></img></Link>
            </div>
            <div className="bannerHome">
              <Link to='/banners'><img src={require("../media/script2/Banners.png")} alt='about'></img></Link>
            </div>
            <div className="collageHome">
              <Link to='/collages'><img src={require("../media/script2/Collages.png")} alt='about'></img></Link>
            </div>
            <div className="aboutHome">
              <Link to='/about'><img src={require("../media/script2/About.png")} alt='about'></img></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
