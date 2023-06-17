import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './header.css';
import Home from '../Home/home';
import CaraouselMain from '../Caraousel/Caraousel';
import Offering from '../Offering/Offering';
import Comingsoon from '../ComingSoon/ComingSoon';



export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='maincomponent' >
        
        <Home/>
        {/* <CaraouselMain/> */}
        <Offering/>
        {/* <Comingsoon/> */}

        
        
      </div>
    )
  }
}

export default Header;