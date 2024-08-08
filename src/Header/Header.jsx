import { useState, useEffect, useContext } from 'react'
import logo from "../assets/Logo2.png";
import { ActiveTabContext } from '../contexts/activeTabContext';
import './Header.css'

function Header() {
//if the active tab changes, run the remove and then add class function
  const {activeTab, setActiveTab} = useContext(ActiveTabContext)

  useEffect(()=> {
    const tabs = document.querySelectorAll('.Header__text');
    tabs.forEach(tab => tab.classList.remove('active', 'Header__background_active'));

    const activeElement = document.getElementById(activeTab);
    if(activeElement) {
      activeElement.classList.add('active', 'Header__background_active');
    }
  }, [activeTab])

  return (
    <div className='Header'>
      <img className='Header__image' src={logo}/>
      <nav className='Header__nav'>
          <li className='Header__text' id='menu' onClick={() => {setActiveTab('menu')}}>menu</li>
          <li className='Header__text' id='calendar' onClick={() => {setActiveTab('calendar')}}>calendar</li>
          <li className='Header__text' id='about' onClick={() => {setActiveTab('about')}}>about</li>
          <li className='Header__text' id='donations' onClick={() => {setActiveTab('donations')}}>donations</li>
          <li className='Header__text' id='contact' onClick={() => {setActiveTab('contact')}}>contact</li>
        </nav>
    </div>
  )
}

export default Header
