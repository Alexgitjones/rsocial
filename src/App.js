// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Dashboard from'./dashboard/dashboard';
import Aboutus from './pages/aboutus';
import Privacy from './pages/privacy';
import Download from './pages/howtodownload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/how-to-download" element={<Download />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
