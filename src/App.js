import logo from './logo.svg';
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
import Accessdenied from './pages/access_denied';
import Becomeacreator from './pages/become_a_creator_page';
import  Forbrand from './pages/for-brands';
import  Legalterms from './pages/legal_terms_of_services';
import  Licenseterms from './pages/license_term';
import Pricingpage from './pages/pricing_page';
import Signin from './pages/sign_in_page';
import Signup from './pages/sign_up_page';
import Singleservices from './pages/single_service_page';

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
          <Route path="/access-denied" element={<Accessdenied />} />
          <Route path="/become-a-creator" element={<Becomeacreator />} />
          <Route path="/for-brands" element={<Forbrand />} />
          <Route path="/legal-terms" element={<Legalterms />} />
          <Route path="/license-terms" element={<Licenseterms />} />
          <Route path="/pricing-page" element={<Pricingpage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/single-services" element={<Singleservices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
