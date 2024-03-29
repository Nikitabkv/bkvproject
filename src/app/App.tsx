import './App.css'
import MainPage from "../pages/MainPage"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import CityPage from "../pages/CityPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/city/" element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
