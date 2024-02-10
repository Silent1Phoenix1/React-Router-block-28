import './App.css'
import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home'

function App() {

  return (
    <>
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        {/* dont forget to capitalize and double check things are spelled the same ok?... ok */}
        {/* if it is actually working the tags should be a different color */}
        <Link to="/blue"> Blue </Link>
        <Link to="/red"> Red </Link>
        <Link to="/"> Home Page</Link>
      </div>
      <div id="main-section">
        <Routes>
          {/* remember how to put colors name in because that took way too long to figure it out for literally one word -_- */}
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />   
          <Route path="/" element={<Home />} />  
        </Routes> 
      </div>
    </div>
    </>
  )
}

export default App
