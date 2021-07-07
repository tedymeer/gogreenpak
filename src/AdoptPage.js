import React from 'react'
import './adopt.css'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import Footer from './Footer'

function AdoptPage() {
    return (
       <>
           <p className="adoptheading">Let's Adopt a plant</p>
           
        <div className="flexwrapper">   
           <ContactDetails id="contactdetails"/>
           <ContactForm id="contactform"/>          
        </div>
        <div className="space"></div>

            <Footer/>
        </>
    )
}

export default AdoptPage
