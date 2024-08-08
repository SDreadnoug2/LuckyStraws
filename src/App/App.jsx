import { useState, useEffect, useContext } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { ActiveTabContext } from '../contexts/activeTabContext';
function App() {

  const [activeTab, setActiveTab] = useState('')
  const calendarInfo = ["August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic"]
// const calendarInfo = ["August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic", "August 8th - Open Mic", "August 9th - Open Mic"]
  return (
    <ActiveTabContext.Provider  value= {{activeTab, setActiveTab}}>
      <div className='App'>
        <div className='App__container'>
          <Header/>
            <Main/>
        </div>
      </div>
    </ActiveTabContext.Provider>
  )

}

export default App
