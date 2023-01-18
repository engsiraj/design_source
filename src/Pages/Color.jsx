import React from 'react'

const Color = () => {
  return (
    <>
      <div className='width7'>
        <p className="type2 bold2 padding_bottom4" >Colors 🎨</p>
        <div className="flex">
          <a className="text_dark margin_end4">Background color</a>
          <a className="text_dark margin_end4">Color</a> 
        </div>
        <hr/>
        <p className="type3 bold1 padding_bottom2 padding_top3" > colors</p>
        <p className="text padding_bottom2" >Adding a background color to an element is as simple as adding the color name <span className='code'>.bg_color</span> classes.</p>

        <div class="text grid1 bg_blue text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_red text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_green text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_yellow text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>
        
        <p className="type3 bold1 padding_bottom2 padding_top2" >B & W shades  </p> 
  
        <div class="text grid1 bg_dark text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_dim text_white padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_shade text_dark padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

         <div class="text grid1 bg_white text_dark padding6 margin_bottom3 flex space_between">
          <p>Color Name</p>
          <p>classes</p>
        </div>

      </div>
    </>
  )
}

export default Color