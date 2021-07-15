import React from 'react'
import './about.css'
import Titlesection from './Titlesection'
function About(props) {
    return (
        
        <div className="aboutwrap circlesecwrap section about" style={{padding:'4%',paddingTop:'1%',paddingBottom:'1%'}}>
            <Titlesection title={props.title}/>
            <ul>
                <li>Go Green Pakistan is a non profit organization, which wants to make Pakistan green again</li>
                <li>So far we  have planted and taken care of many plants.</li>
                <li>Join hands now to save the environment </li>
            </ul>
        </div>
    )
}

export default About
