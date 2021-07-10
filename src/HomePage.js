import React from 'react'
import Slider from './Slider'
import GreetBox from './GreetBox'
import SectionCircle from './SectionCircle'
import Footer from './Footer'
import Section from './Section'
import './section.css'

function HomePage() {
    return (
        <div>
            <GreetBox/>
            <Slider/>
            
            <SectionCircle title="3 simple steps"/>
            <Section />
            <div className="space"></div>
            <Footer/>
        </div>
    )
}

export default HomePage
