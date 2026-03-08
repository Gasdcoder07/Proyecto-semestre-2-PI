import { Home, Login, Register } from "./pages/index.js"
import { Routes, Route } from 'react-router'

function App() {

  return (
      <div className="font-SnPro antialiased">
          {/* Layout */}
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </main>
      </div>
  );
}

export default App
