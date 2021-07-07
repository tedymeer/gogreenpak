import React from 'react'
import './contactdetail.css'
function ContactDetails() {
    return (
        <div className="cdetail">
            <p className="cmainheading">Contact us</p>

            <div className="handc">
            <p className="sheading">Call us at</p>
            <p className="para">+92-333-2244438</p>
            </div>

            <div className="handc">
            <p className="sheading">Our Address</p>
            <p className="para">Hno. A-78 Deluxe Bungalows Ispahani Road, Karachi</p>
            </div>

            <div className="handc">
            <p className="sheading">Find us on facebook</p>
            <p className="para"><a className="fblink" href="https://www.facebook.com/PlantLives" target="_blank">Go Green Pakistan</a></p>
            </div>

        </div>
    )
}

export default ContactDetails
