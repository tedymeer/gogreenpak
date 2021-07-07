import React from 'react'
import './contactform.css'
function ContactFrom() {
    return (
        <div className="cform">
            <p className="cfmainheading">Mail us</p>

            <div className="form">
                <form >
                    <label for="name" className="labels">Your name</label>
                    <input id="name" type="text" name="fullname" className="inputfield" placeholder="Enter your name"/>
                    
                    <label for="email" className="labels">Email address</label>
                    <input id="email" type="email" name="email" className="inputfield" placeholder="Enter your email"/>
                   
                    <label for="message" className="labels">Message</label>
                    <textarea id="message" className="inputfield" id="tarea" style={{resize: 'none'}} placeholder="Enter your message"></textarea>
                    <input type="submit" value="Send" className="submitbtn"/>
                </form>
            </div>


        </div>
    )
}

export default ContactFrom
