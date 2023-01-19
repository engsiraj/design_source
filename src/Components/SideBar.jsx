import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
      <>
      <div className="grid6">
        
        <p className="type4 bold1 uppercase">Overview</p>
        <div className='padding_bottom1 padding_top1'>
           <Link to="/" className="text_dark">Introduction</Link>
        </div>
        <p className="type4 bold1 uppercase ">layout</p>
        <div className='padding_top1 padding_bottom1'>
           <Link  to="/color" className="text_dark" >Colors</Link>
         </div>
          
    
            
          {/* <p className="type4 uppercase padding_top2 padding_bottom2">COMPONENTS</p>
            <p className="text padding_top1 padding_bottom1">Colors</p>
            <p className="text className='padding_top1 padding_bottom1">Grid System</p>
            <p className="text className='padding_top1 padding_bottom1">Typography</p> */}
        </div> 
     </>
  )
}

export default SideBar