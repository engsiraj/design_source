import React from 'react'

const Typo = () => {
  return (
      <>
        <div className='wide7'>
        <p className="type3 bold2 padding_bottom4" >Typography 🖋</p>
    
        <div className="flex">
        <a className="text_dark margin_end4">Typeface</a>
        <a className="text_dark margin_end4">Type</a>
        <a className="text_dark margin_end4">Text Sections</a>
        <a className="text_dark margin_end4">Helper classes</a>
        </div>
        <hr />
        <p className="type4 bold1 padding_bottom2 padding_top2">TypeFace</p>      
        <p className="text padding_bottom2">The Design Source is a User Interface Design System built in html/css and flexbox that allows resources to be reused to build consistent user interfaces.</p>
       
        <p className="type1 padding_bottom2">larger type</p>
        <p className="text padding_bottom2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium rem quaerat optio praesentium harum tenetur hic, doloribus.</p>
              
        <p className="type4 bold1 padding_bottom2">poppins - font family</p>
        <p className="text padding_bottom2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium rem quaerat optio praesentium harum tenetur hic, doloribus.</p> 
              
        <p className="type4 bold1 padding_bottom2">type</p>
        <p className="text padding_bottom2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium rem quaerat optio praesentium .</p> 
        
            <div className="margin_bottom5">
            <div className="flex space_between margin_top4 ">
                <p className="type1">Large heading</p>
                  <div >
                    <span className="text margin_end1"> 36px</span>
                    <span className="code ">.type1</span>
                 </div>  
              </div> 
<hr />
               <div className="flex space_between">
                <p className="type2">Medium heading</p>
                <div>
                    <span className="text margin_end1"> 30px</span>
                    <span className="code ">.type2</span>
                </div>   
                </div>   
<hr />
                      
               <div className="flex space_between">
                <p className="type3">Small heading</p>
                 <div>
                    <span className="text margin_end1"> 24px</span>
                    <span className="code ">.type3</span>
                 </div>    
                </div>  
<hr />
                      
               <div className="flex space_between">
                <p className="type4">text</p>
                <div>
                    <span className="text margin_end1"> 18px</span>
                    <span className="code ">.type4</span>
                 </div>  
              </div> 
<hr />
                      
               <div className="flex space_between">
                <p className="text">Text</p>
                <div>
                    <span className="text margin_end1"> 14px</span>
                    <span className="code ">.text</span>
                 </div>  
              </div>
              </div>



            <p className="type4 margin_bottom2 bold1">text sections</p>
              <div className="padding_start5">
                  
                    <p className="type4 bold1 margin_bottom1">text sections</p>
                    <p className="text margin_bottom1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et necessitatibus consectetur repellendus! Eius, aliquam? Amet, enim beatae adipisci alias quis at eius quisquam cupiditate facere ipsam dolorum aspernatur sunt fugiat ducimus consequatur sint esse ipsum delectus fuga iste! Minima explicabo voluptate atque dolores doloremque consequatur nobis, aut nemo vel.</p>
              </div>
              <p className="type4 margin_bottom2 margin_top2 bold1">Helper classes</p>
              <div className="margin_bottom2">
                  <p className="text bold1 margin_bottom1 margin_top1">Font style</p>
           
                    <li className='type_circle'><span className='code'>.bold1</span> for bold(500)</li>
                    <li className='type_circle'><span className='code'>.bold2</span> for bold(600)</li>
                    <li className='type_circle'><span className='code'>.bold3</span> for bold(700)</li>
                    <li className='type_circle'><span className='code'>.italic</span> for italic</li>
             
                 
                  <p className="text bold1 margin_bottom1 margin_top1">Text Alignment </p>
            
                    <li className='type_circle'><span className='code'>.text_start</span> to align text at left</li>
                    <li className='type_circle'><span className='code'>.text_end</span> to align text at right</li>
                    <li className='type_circle'><span className='code'>.text_center</span> to align text at center</li>
               
                  
                  <p className="text bold1 margin_bottom1 margin_top1">Lists styles</p>
            
                    <li className='type_circle'><span className='code'>.type_none</span> for no list style</li>
                    <li className='type_circle'><span className='code'>.type_circle</span> for circular style list</li>
                    <li className='type_circle'><span className='code'>.type_disc</span> for disc style list</li>
             
              
                 <p className="text bold1 margin_bottom1 margin_top1">Other classes</p>
               
                    <li className='type_circle'><span className='code'>.code</span> for code snippet</li>
                    <li className='type_circle'><span className='code'>.keyboard</span> for keys</li>
              </div>
          </div>
         
      </>
  )
}

export default Typo