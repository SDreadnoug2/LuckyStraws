import { useState, useEffect } from 'react'
import './Main.css'
import NavBar from "../NavBar/NavBar"
import Content from '../Content/Content'
function Main() {
  
  return (
    <div className='main'>
        <NavBar/>
        <Content/>
    </div>
  )
}

export default Main
