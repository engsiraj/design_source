import React from 'react'
import SideBar from './SideBar'
import Content from './Content'

const MainContainer = () => {
  return (
    <>
        <div class="exlarge_container font_poppins text_dark " style={{padding:'50px 0px'}}>
        <div class="row space_between" >
          <SideBar />
          <div class="width8">
           <Content/>
          </div>
        </div>
        </div>  
    </>
  )
}

export default MainContainer