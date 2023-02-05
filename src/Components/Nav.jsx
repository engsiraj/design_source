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
            <img src={logo} style={Logo} />
            <div className="flex column justify_center">
              <a href="https://github.com/engsiraj/designsource" className="type3 link text_dark"><BsGithub/></a>  
            </div>
        </div>
      </nav>
  )
}

export default Nav