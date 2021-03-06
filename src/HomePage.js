import React from 'react'
import Slider from './Slider'
import GreetBox from './GreetBox'
import SectionCircle from './SectionCircle'
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
            <div style={{padding:'2%',backgroundColor:'#f6f5eb'}}></div>
        </div>
    )
}

export default HomePage
