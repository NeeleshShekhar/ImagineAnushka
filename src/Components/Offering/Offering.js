import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './offering.css';
import DesignConsultation from '../../Assets/DesignConsultation.jpg';
import FurnitureSelection from '../../Assets/FurnitureSelection.jpg';
import SpacePlanning from '../../Assets/SplacePlanning.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class Offering extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Container>
        


        <Row>
            <Col md={4} className='grid1'>
            <Card >
              <Card.Img variant="top" src={DesignConsultation} height={200}/>
                <Card.Body>
                  <Card.Title>Design Consultation</Card.Title>
                  <Card.Text>
                  Expert guidance to transform your space with personalized interior design recommendations.
            
                  </Card.Text>
                  
                </Card.Body>
            </Card>
                    
            </Col>
            <Col md={4} className='grid2'>
            <Card >
              <Card.Img variant="top" src={FurnitureSelection} height={200} />
                <Card.Body>
                  <Card.Title>Furniture Selection</Card.Title>
                  <Card.Text>
                  Access to a curated collection of stylish furniture options to enhance your interior decor.
            
                  </Card.Text>
                 
                </Card.Body>
            </Card>
            
            </Col>
            <Col md={4} className='grid3'>
            <Card >
              <Card.Img variant="top" src={SpacePlanning} height={200} />
                <Card.Body>
                  <Card.Title>Space Planning</Card.Title>
                  <Card.Text>
                  Strategic layout optimization to maximize functionality and create harmonious living or working environments.
            
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            
            </Col>

        </Row>

        

        </Container>
      </div>
    )
  }
}

export default Offering