import './footer.css'
import React from 'react'

const description = "Go Green Pakistan is a non profit organization, which aims to plant trees in pakistan and make pakistan green again. So far we have planted plants at many places, our message is that 'Money is not needed, responsibility is' take action now and adopt a plant today";
  const title = "About us";
const anchor={color:'inherit',textDecoration:'none'}

function Footer() {
  var year = new Date().getFullYear()
   return (
       <div className="footer">
           <div className="box1">&copy; {year} - Go Green Pakistan</div>
           <div className="box2">Happy planting</div>
           <a className="box3" href="https://www.facebook.com/PlantLives" target="_blank" style={anchor}> <span style={{color:'white'}} >f</span></a>
           <a className="box4" href="https://www.facebook.com/PlantLives" target="_blank" style={anchor}> <span style={{color:'white'}} >t</span></a>
           <a className="box5" href="https://www.facebook.com/PlantLives" target="_blank" style={anchor}> <span style={{color:'white'}} >in</span></a>
       </div>

   );
}

export default Footer
