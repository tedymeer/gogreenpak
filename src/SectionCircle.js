import React from 'react'
import './circlesec.css'
import pic1 from './s1.png';
import pic2 from './s2.png';
import pic3 from './s3.jpg';
import Titlesection from './Titlesection'

const style={textAlign:'center' , marginTop:'6%'}



function SectionCircle(props) {
    return (
        <div className="circlesecwrap section">
            <Titlesection title={props.title}/>
           
           <figure> <img src={pic1} alt="phone pic"  className="c1"/> <figcaption className="seccap" style={style}>Step 1 : Contact</figcaption></figure>
           <figure> <img src={pic2} alt="plant in hands pic" className="c1"/><figcaption className="seccap" style={style}>Step 2 : Adopt</figcaption></figure>
           <figure> <img src={pic3} alt="watering plant pic" className="c1"/><figcaption className="seccap" style={style}>Step 3 : Care</figcaption></figure> 
           
            </div>
    )
}

export default SectionCircle
