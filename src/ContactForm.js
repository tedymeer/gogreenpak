import React from 'react'
import { useState } from 'react';
import './contactform.css'
function ContactFrom() {

    const [form,setForm]= useState({
        fullname:'',
        email:'',
        message:'',
        mailto:'tahamir999@gmail.com',
        subject:'Mail from Go Green Pakistan Website'

    })

    function submitMail(e) {
          e.preventDefault();

          fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
                     })



                     

    }
    function handleInput(event){
        setForm((oldvals)=>{
            return {...oldvals,[event.target.name]:event.target.value}
        })
        
    }
    return (
        <div className="cform">
            <p className="cfmainheading">Mail us</p>

            <div className="form">
                <form onSubmit = {submitMail}>
                    <label for="name" className="labels">Your name</label>
                    <input id="name" type="text" name="fullname" className="inputfield" placeholder="Enter your name" onChange={handleInput}/>
                    
                    <label for="email" className="labels">Email address</label>
                    <input id="email" type="email" name="email" className="inputfield" placeholder="Enter your email" onChange={handleInput}/>
                   
                    <label for="message" className="labels">Message</label>
                    <textarea name="message" id="message" className="inputfield" id="tarea" style={{resize: 'none'}} placeholder="Enter your message" onChange={handleInput}></textarea>
                    <input type="submit" value="Send" className="submitbtn"/>
                </form>
            </div>


        </div>
    )
}

export default ContactFrom
