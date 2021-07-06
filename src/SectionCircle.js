import React from 'react'
import './circlesec.css'
import pic1 from './c1.jpg';
import pic2 from './c2.jpg';
import pic3 from './c3.jpg';
import pic4 from './c4.jpg';
import pic5 from './c5.jpg';

const style={textAlign:'center' , marginTop:'6%'}



function SectionCircle(props) {
    return (
        <div className="circlesecwrap section">
            <div className="titlesection">{props.title}</div>
           <figure> <img src={pic1} className="c1"/> <figcaption className="card-title h5" style={style}>Trolley</figcaption></figure>
           <figure> <img src={pic2} className="c1"/><figcaption className="card-title h5" style={style}>Planting</figcaption></figure>
           <figure> <img src={pic3} className="c1"/><figcaption className="card-title h5" style={style}>Candid</figcaption></figure>
            <figure><img src={pic4} className="c1"/><figcaption className="card-title h5" style={style}>Beauty</figcaption></figure>
           <figure> <img src={pic5} className="c1"/><figcaption className="card-title h5" style={style}>Leaves</figcaption></figure> 
            
            </div>
    )
}

export default SectionCircle
