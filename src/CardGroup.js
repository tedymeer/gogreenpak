import React from 'react'
import { CardDeck,Card } from 'react-bootstrap'
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import './cardgrp.css';
function CardGroup() {
    return (
        <CardDeck >
        <Card>
          <Card.Img variant="top" src={pic1} className="picgrp" />
          <Card.Body>
            <Card.Title>At KU - Commerce dept</Card.Title>
          </Card.Body>
        
        </Card>
        <Card>
          <Card.Img variant="top" src={pic2} className="picgrp"/>
          <Card.Body>
            <Card.Title>Plantation with kids</Card.Title>
          </Card.Body>
       
        </Card>
        <Card>
          <Card.Img variant="top" src={pic3} className="picgrp"/>
          <Card.Body>
            <Card.Title>Ready to plant</Card.Title>  
          </Card.Body>
         
        </Card>
      </CardDeck>
    )
}

export default CardGroup
