import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mayhair from '../../Assets/Mayhair1.jpg'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='home-main'>
         <Container className='row-test' >
      <Row  >
        <Col md={6} className='Home-main-text' >
        <div className='modernint'>
                Make Room 
            </div>
            
            <div className='mixmatch'>
                for better
            </div>
            <div className='modernint'>
                Living.
            </div>
            <br></br><br></br>
            <div className='leftpls'>
            <Button variant='outline-success' className='startnowbutton'><a href="/contactus">Lets Start your Dream Project</a></Button>
            <Button variant='outline-info' className='readmorebutton'><a href="/aboutus">About us</a></Button>
            </div>

            </Col>
        <Col  md={6} className='image-main'>
            
           <img className='image-firstbox' src={Mayhair}></img> 

        </Col>
      </Row>
      
    </Container>

    

      </div>
    )
  }
}

export default Home