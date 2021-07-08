import React from 'react'
import './mailus.css'

function Mailus() {

    return (
        <div className="cdetail">
            <p className="cfmainheading">Mail us</p>
            <a href="mailto:tahamir999@gmail.com" className="submitbtn mailbtn" style={{textDecoration:'none'}}>Send Mail</a>
        
            <div className="handc">
            <p className="sheading">Subject line</p>
            <p className="para">Kindly mention 'Want to adopt plant GGP' in the subject line when mailing for plant adoption</p>
            </div>
            <div className="handc">
            <p className="sheading">Feel free to contact</p>
            <p className="para">Please feel free to mail us to talk regarding plantation in Pakistan</p>
            </div>
        
        
        </div>
    )
}

export default Mailus
