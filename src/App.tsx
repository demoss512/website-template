import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import NavigationTable from './navigation-table/NavigationTable'
import { PlaceHolder } from "./placeholder/PlaceHolder";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationTable />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Home page</h2>
                <p>
                  this is a homepage
                </p>
              </>
            }
          />
          <Route path="/pageOne" element={<PlaceHolder />} />
          <Route path="/pageTwo" element={<PlaceHolder />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
