import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/pages/login/Login"
import Home from "./components/pages/home/Home"
import Movie from "./components/pages/movie/Movie"


function App() { 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<h2><Login/></h2>}/>
          <Route path="/home" element={<h2><Home/></h2>}/>
          <Route path="/movie" element={<h2><Movie/></h2>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
