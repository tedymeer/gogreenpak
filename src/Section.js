import React from 'react'
import CardGroup from './CardGroup';
import './section.css';

function Section(props) {
    return (
        <div className="section">
          <p className="titlesection">{props.title}</p>
            <CardGroup/>
        </div>
    )
}

export default Section
