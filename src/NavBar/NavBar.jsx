import { useState, useEffect } from 'react'
import './NavBar.css'

function NavBar() {
  
  return (
    <div className='NavBar'>
        <button className='NavBar__button'> menu</button>
        <button className='NavBar__button'> calendar</button>
        <button className='NavBar__button'> about us</button>
        <button className='NavBar__button'> donations</button>
        <button className='NavBar__button'> contact</button>
    </div>
  )
}

export default NavBar
