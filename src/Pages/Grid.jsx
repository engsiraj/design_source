import React from 'react'

// Todo: grid.jsx
// adding grid system to the website
// creating tables and compnenents for representations
// wake up on time and complete the job

const Grid = () => {
  return (
    <>
       <div className='wide7'>
        <p className="type3 bold2 padding_bottom4" >Grid system 🧮 </p>
        <div className="flex">
        <a className="text_dark margin_end4">grid</a>
        <a className="text_dark margin_end4">column</a>
        </div>
        <hr />   
        <p className="text padding_bottom2 padding_top2">grid system is composed of many 8 column named as column with gutter of 0.01% in each column by defualt.</p>
        <p className="type4 bold1 padding_bottom2">Grid sizes</p>   
        <p className="text padding_bottom2">100%/1 - <span className='code'>.column1</span></p>
        <div className="column1 padding1 bg_yellow " >
           <div className="column1 padding3 bg_green text_center text_white" >1</div>
        </div>
       <p className="text padding_bottom2 padding_top2">100%/2 - <span className='code'>.column2</span></p>
        <div className="column1 padding1 bg_yellow flex space_between" >
           <div className="column2 padding3 bg_green text_center text_white" >2</div>
           <div className="column2 padding3 bg_green text_center text_white" >2</div>
        </div>
      <p className="text padding_bottom2 padding_top2">100%/3 - <span className='code'>.column3</span></p>
        <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column3 padding3 bg_green text_center text_white" >3</div>
           <div className="column3 padding3 bg_green text_center text_white" >3</div>
           <div className="column3 padding3 bg_green text_center text_white" >3</div>
        </div>
        <p className="text padding_bottom2 padding_top2">100%/4 - <span className='code'>.column4</span></p>
         <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column4 padding3 bg_green text_center text_white" >4</div>
           <div className="column4 padding3 bg_green text_center text_white" >4</div>
           <div className="column4 padding3 bg_green text_center text_white" >4</div>
           <div className="column4 padding3 bg_green text_center text_white" >4</div>
        </div>
       <p className="text padding_bottom2 padding_top2">100%/5 - <span className='code'>.column5</span></p>
         <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column5 padding3 bg_green text_center text_white" >5</div>
           <div className="column5 padding3 bg_green text_center text_white" >5</div>
           <div className="column5 padding3 bg_green text_center text_white" >5</div>
           <div className="column5 padding3 bg_green text_center text_white" >5</div>
           <div className="column5 padding3 bg_green text_center text_white" >5</div>
        </div>
        <p className="text padding_bottom2 padding_top2">100%/6 - <span className='code'>.column6</span></p>
         <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
           <div className="column6 padding3 bg_green text_center text_white" >6</div>
        </div>
         <p className="text padding_bottom2 padding_top2">100%/7 - <span className='code'>.column7</span></p>
         <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
           <div className="column7 padding3 bg_green text_center text_white" >7</div>
        </div>
        <p className="text padding_bottom2 padding_top2">100%/8 - <span className='code'>.column8</span></p>
          <div className="column1 padding1 bg_yellow  flex space_between" >
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
           <div className="column8 padding3 bg_green text_center text_white" >8</div>
        </div>
        <p className="type4 bold1 padding_bottom2">column</p>
        <p className="text padding_bottom2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at eos officiis id, unde maxime dolor labore obcaecati a porro optio tenetur itaque aperiam, laboriosam odio laborum asperiores perferendis voluptatum?</p> 
       </div>
    </>
  )
}

export default Grid