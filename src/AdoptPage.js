import React from 'react'
import './adopt.css'
import ContactDetails from './ContactDetails'
import Mailus from './Mailus'
import Footer from './Footer'

function AdoptPage() {
    return (
       <>
           <p className="adoptheading">Let's Adopt a plant</p>
           
        <div className="flexwrapper">   
           <ContactDetails />
           <Mailus />          
        </div>
        <div className="space"></div>
            <Footer/>
        </>
    )
}

export default AdoptPage
