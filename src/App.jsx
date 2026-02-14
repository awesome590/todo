import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <Router>
        <Nav/>
      <Home/>
    </Router>
  )
}

export default App
