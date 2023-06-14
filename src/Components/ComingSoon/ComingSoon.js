import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './ComingSoon.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
export class Comingsoon extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='homecard-main'>
        <Container >
       <div className='row'>
       <div className='col-6'>
            <br/>
            <img className='image-firstbox' src='https://static.vecteezy.com/system/resources/previews/001/970/338/original/building-under-construction-site-free-vector.jpg'></img> 

        </div>
       <div className='col-6'>
            <br/>
        Great Things Coming Soon  !!
        </div>
        </div>
        </Container>
        </div>
    )
  }
}

export default Comingsoon