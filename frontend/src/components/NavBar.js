import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div className='navbar'>
    <div>
      <Link to='/'><img src={require("../media/script/rinalam.png")} alt='rinalam'></img></Link>
    </div>
    </div>
  )
}

export default NavBar
