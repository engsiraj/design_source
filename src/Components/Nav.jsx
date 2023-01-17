import React from 'react'
import { BsGithub } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="exlarge_container font_poppins text_dark">
        <div className="flex space_between " style={{  height: "50px" }} >
               <p className="flex column justify_center type3 bold2">DS</p>
               <a href="https://github.com/engsiraj/designsource" className="flex column justify_center text_dark link text_end type3"><BsGithub/></a>        
        </div>
      </nav>
  )
}

export default Nav