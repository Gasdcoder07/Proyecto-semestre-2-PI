import { Navbar } from "./components/index.js"
import { Home, Login } from "./pages/index.js"
import { Routes, Route } from 'react-router'

function App() {

  return (
    <>
        <Navbar/>

        {/* Layout */}
        <main className="font-SnPro antialiased container mx-auto px-4 py-6">
            <Routes>
                <Route path = '/' element = {<Home/>} />
                <Route path = '/login' element = {<Login/>} />
            </Routes>
        </main>
    </>
  )
}

export default App
