import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import JobsPage from "./Pages/JobsPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<LandingPage/>}/>
                  <Route exact path="/jobs" element={<JobsPage/>}/>
                  <Route exact path="/register" element={<RegisterPage/>}/>
              </Routes>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
