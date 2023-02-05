
import CodeBlock from '../Components/CodeBlock'

const Intro = () => {

const code1 = `<link href='https://cdn.jsdelivr.net/gh/engsiraj/
designsource@master/style.css' rel="stylesheet">
`;
const code2 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.png" />
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0" />
    <title>Design Source</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
  
return (
    <>
      <div className='wide7'>
        <p className="type3 bold2 padding_bottom2" >Introduction ✍</p>
        <p className="text padding_bottom1 padding_top1">The Design Source is a User Interface Design System built in html/css and flexbox that allows resources to be reused to build consistent user interfaces.</p>
        <p className="text padding_bottom1" >A project developed by <a href="https://github.com/engsiraj">Siraj</a> , a Frontend and Design system developer.</p>
        <p className="type4 bold1 padding_bottom2 padding_top2" > Guide and Resources 📝</p>
        <p className="text" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut, inventore eaque doloribus explicabo nam doloremque ipsam dicta fuga! Animi!</p>
        <div className="padding_bottom2 padding_top2">
          <li className="type_circle"><a href="">linked title</a></li>
          <CodeBlock code={code1} language="html" />
          <li className="type_circle"><a href="">linked title</a></li>
          <li className="type_circle"><a href="">linked title</a></li>
        </div>
        <p className="type4 bold1 padding_bottom2 padding_top2">Design and development</p>
        <p className="textpadding_bottom2">A project developed by Siraj , a Frontend and Design system developer.</p>
        <CodeBlock code={code2} language="xml" />
      </div>
    </>
  )
}

export default Intro