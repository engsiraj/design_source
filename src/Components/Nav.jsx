import React from 'react'
import { BsGithub } from "react-icons/bs"
import logo from '../assets/logo/logo.png'

const Nav = () => {
  const Logo = {
    width: "25px",
    height: "25px",
    marginTop:'13px'
}
  return (
    <nav className="exlarge_container font_poppins text_dark">
        <div className="flex space_between " style={{height: "50px"}} >
               <img src={logo} style={Logo}/>
               <a href="https://github.com/engsiraj/designsource" className="flex column justify_center text_dark link text_end type3"><BsGithub/></a>        
        </div>
      </nav>
  )
}

export default Nav