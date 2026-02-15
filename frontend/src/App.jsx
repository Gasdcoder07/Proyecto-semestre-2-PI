import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Login from "./pages/Login/Login.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Login/>
    </>
  )
}

export default App
