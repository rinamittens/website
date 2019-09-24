import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NavBar.css"

const NavBar = (props) => {
  return(
    <div className='navbar'>
    <div className="rinaImg">
      <Link to='/'><img src={require("../media/script/rinalam.png")} alt='rinalam'></img></Link>
    </div>
    </div>
  )
}

export default NavBar
