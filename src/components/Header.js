import React from 'react'
import './Header.css'
import logo192 from './images/logo.png'

const Header = () => {
  return (
    <div className='nav'>
      <div className='top-line'></div>
      <div className='left_section'>
      <img src={logo192} alt="" height={28} width={128} className='logo '/>
      </div>
      <div className='right_section'>
      <p className="head-comp hover-element">Home </p>
      <p className="head-comp hover-element">Wealth </p>
      <p className="head-comp hover-element">Our Team </p>
      <p className="head-comp hover-element">Media </p>
      <p className="head-comp hover-element">Contact Us </p>
      <button className='login-button'>Client Login ⌄</button>
      </div>
    </div>
  )
}

export default Header
