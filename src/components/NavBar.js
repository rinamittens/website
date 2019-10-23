import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NavBar.css"

const NavBar = (props) => {
  return(
    <div className='navbar'>
      <Link to='/' id="link"><img src={require("../media/script2/RLG.png")} alt='rinalam'></img></Link>
    </div>
  )
}

export default NavBar
