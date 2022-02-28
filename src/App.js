import './App.css';
import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import {Routes} from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/LandingPage";
import JobsPage from "./Pages/JobsPage";
import RegisterPage from "./Pages/RegisterPage";
import FailPage from "./Pages/FailPage";

function App() {
  return (
      <div className="App">
          <Router>
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<LandingPage/>}/>
                  <Route exact path="/jobs" element={<JobsPage/>}/>
                  <Route exact path="/register" element={<RegisterPage/>}/>
                  <Route path="/404" element={<FailPage/>}/>
                  <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
