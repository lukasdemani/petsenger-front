import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import { AuthProvider } from "./contexts/AuthContext";
import { FlightProvider } from './contexts/FlightContext';

function App() {
  return (
    <AuthProvider>
      <FlightProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-a-quote" element={<Quote />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
      </FlightProvider>
    </AuthProvider>
  );
}

export default App;
