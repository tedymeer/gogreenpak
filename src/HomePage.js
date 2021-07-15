import React from 'react'
import Slider from './Slider'
import GreetBox from './GreetBox'
import SectionCircle from './SectionCircle'
import Footer from './Footer'
import './section.css'
import Howitwork from './Howitwork'
import About from './About'

function HomePage() {
    return (
        <div>
            <GreetBox/>
            <Slider/>
            <About title="Who we are?"/>
            <SectionCircle title="3 simple steps"/>
            <Howitwork title="How it works"/>
            <div className="space"></div>
            <Footer/>
        </div>
    )
}

export default HomePage
