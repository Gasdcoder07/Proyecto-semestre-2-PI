import { Navbar } from "./components/index.js"
import { Home, Login } from "./pages/index.js"
import { Routes, Route } from 'react-router'

function App() {

  return (
      <div>
          <Navbar />

          {/* Layout */}
          <main className="font-SnPro antialiased container mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-12">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </main>
      </div>
  );
}

export default App
