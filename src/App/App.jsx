import { useState, useEffect } from 'react'
import './App.css'
import Header from '../Header/Header'
import gridImage from '../assets/Grid.png';
import Main from '../Main/Main';
function App() {
  
  return (
    <div className='App'>
      <div className='App__background'>
          <Header />
          <Main/>
      </div>
    </div>
  )
}

export default App
