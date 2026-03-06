import { Home, Login } from "./pages/index.js"
import { Routes, Route } from 'react-router'

function App() {

  return (
      <div className="font-SnPro antialiased">
          {/* Layout */}
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </main>
      </div>
  );
}

export default App
