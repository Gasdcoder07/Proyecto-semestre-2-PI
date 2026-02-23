import { Navbar } from "./components/index.js"
import { Home, Login } from "./pages/index.js"
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <Navbar/>

        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/login' element = {<Login/>} />
        </Routes>
    </>
  )
}

export default App
