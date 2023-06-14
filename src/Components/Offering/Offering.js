import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './offering.css';
import DesignConsultation from '../../Assets/DesignConsultation.jpg';
import FurnitureSelection from '../../Assets/FurnitureSelection.jpg';
import SpacePlanning from '../../Assets/SplacePlanning.jpeg';

export class Offering extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Container>
        <Row>
            <Col md={4} className='grid1'>
            <strong><h3>Design Consultation </h3></strong>
            
            Expert guidance to transform your space with personalized interior design recommendations.
            </Col>

            <Col md={4} className='grid2'>
            <strong><h3>Furniture Selection </h3></strong>
            
            Access to a curated collection of stylish furniture options to enhance your interior decor.
            </Col>

            <Col md={4} className='grid3'>
            <strong><h3>Space Planning</h3></strong> 
            
            Strategic layout optimization to maximize functionality and create harmonious living or working environments.
            </Col>

        </Row>


        <Row>
            <Col md={4} className='grid1'>
            <img className='img-set' variant="top" src={DesignConsultation} />
                    
            </Col>
            <Col md={4} className='grid2'>
            <img className='img-set' variant="top" src={FurnitureSelection} />
            
            </Col>
            <Col md={4} className='grid3'>
            <img className='img-set' variant="top" src={SpacePlanning} />
            
            </Col>

        </Row>
        </Container>
      </div>
    )
  }
}

export default Offering