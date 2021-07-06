import React from 'react'
import Slider from './Slider'
import GreetBox from './GreetBox'
import SectionBox from './Section'
import SectionCircle from './SectionCircle'
import Footer from './Footer'

function HomePage() {
    return (
        <div>
            <GreetBox/>
            <Slider/>
            
            <SectionCircle title="Title"/>
            <SectionBox title="Activities" />
            
            <Footer/>
        </div>
    )
}

export default HomePage
