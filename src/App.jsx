import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Backdrop from './Components/Backdrop'

function App() {
  const [show, setShow] = useState(false)
  const handleShow =()=>{
    setShow(!show)
  }

  return (
    <>
      <div>
        <Header handleShow={handleShow}/>
        <Backdrop handleShow={handleShow} show={show}/>
        <Sidebar show={show}/>

      </div>

    </>
  )
}

export default App
