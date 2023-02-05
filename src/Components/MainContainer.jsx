import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const MainContainer = () => {
  return (
    <>
        <div className="exlarge_container font_poppins text_dark " style={{padding:'85px 0px'}}>
        <div className="row space_between" >
          <SideBar />
          <div className="wide8">
            <Content/>
          </div>
        </div>
        </div>  
    </>
  )
}

export default MainContainer