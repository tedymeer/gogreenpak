import React from 'react'
import Titlesection from './Titlesection'
import './circlesec.css'
import './mission.css'
function Howitwork(props) {
    return (
        <div className="hiw circlesecwrap section">
            <Titlesection title={props.title}/>
            <ul className="missionlist">
                <li >Our mission is to make Pakistan green again, for this we need your support</li>
                <li> We belive that money is not primarily needed to make environment green, responsibility is </li>
                <li >We want you to take responsibility
                    <ul>
                        <li>How you may help?
                        <ul>
                        <li>Help us by adopting a plant</li>
                        <li>Contact us and we will plant it at your place
                            
                        </li>
                            
                        </ul>

                        </li>
                        
                    </ul>

                </li>
               
            <li >You will then take care of that plant until it grows old enough to survive on its own</li>
            
            </ul>
        </div>
    )
}

export default Howitwork
