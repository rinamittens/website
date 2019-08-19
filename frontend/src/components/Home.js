import React from 'react';
import { Link } from 'react-router-dom'
import "../css/Home.css"

function Home() {
  return (
    <div className="home">
      <div>
        <Link to='/'><img src={require("../media/script/rinalam.png")} alt='rinalam'></img></Link>
      </div>
      <div>
        <Link to='/about'><img src={require("../media/script/about.png")} alt='about'></img></Link>
      </div>
      <div>
          <div>
            <Link to='/paintings'><img src={require("../media/script/Paintings.png")} alt='about'></img></Link>
          </div>
          <div>
            <Link to='/drawings'><img src={require("../media/script/Drawings.png")} alt='about'></img></Link>
          </div>
          <div>
            <Link to='/banners'><img src={require("../media/script/Banners.png")} alt='about'></img></Link>
          </div>
      </div>
    </div>
  );
}

export default Home;
