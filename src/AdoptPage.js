import React from 'react'
import './adopt.css'
import ContactDetails from './ContactDetails'
import Mailus from './Mailus'


function AdoptPage() {
    return (
       <>
           <p className="adoptheading">Let's Adopt a plant</p>
           
        <div className="flexwrapper">   
           <ContactDetails />
           <Mailus />          
           
        </div>
    
            
        </>
    )
}

export default AdoptPage
