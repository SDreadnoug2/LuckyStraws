import { useState, useEffect, useContext } from 'react'
import './Main.css'
import NavBar from "../NavBar/NavBar"
import Content from '../Content/Content'
import { ActiveTabContext } from '../contexts/activeTabContext'
function Main() {

  const {activeTab} = useContext(ActiveTabContext)
  
  return (
    <div className='main'>
    </div>
  )
}

export default Main
