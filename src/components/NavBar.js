import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NavBar.css"
import ReactGA from 'react-ga';
ReactGA.initialize('G-NCTQD21PGF');
ReactGA.pageview(window.location.pathname + window.location.search);

const NavBar = (props) => {
  return(
    <div className='navbar'>
      <Link to='/' id="link"><img src={require("../media/script2/RLG.png")} alt='rinalam'></img></Link>
    </div>
  )
}

export default NavBar
