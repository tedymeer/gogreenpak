import React from 'react'
import './circlesec.css'
import pic1 from './s1.png';
import pic2 from './s2.png';
import pic3 from './s3.jpg';


const style={textAlign:'center' , marginTop:'6%'}



function SectionCircle(props) {
    return (
        <div className="circlesecwrap section">
            <div className="titlesection">    <div className="titlecenter">  {props.title}   </div>   </div>
           <figure> <img src={pic1} className="c1"/> <figcaption className="seccap" style={style}>Step 1 : Contact</figcaption></figure>
           <figure> <img src={pic2} className="c1"/><figcaption className="seccap" style={style}>Step 2 : Adopt</figcaption></figure>
           <figure> <img src={pic3} className="c1"/><figcaption className="seccap" style={style}>Step 3 : Care</figcaption></figure> 
            </div>
    )
}

export default SectionCircle
