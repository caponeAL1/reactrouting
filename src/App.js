import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Registration from './Registration';
import { Link } from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>
     <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/contactus" element={<ContactUs/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/registration" element={<Registration/>} />
    </Routes>
    <div>
     <Link to="/Home">Home</Link>&nbsp;&nbsp;
     <Link to="/AboutUs">About Us </Link>&nbsp;&nbsp;
    <Link to="/contactus">ContactUs</Link>&nbsp;&nbsp;
    <Link to="/Registration">Register</Link>&nbsp;&nbsp;
    </div><br/>
    
    </BrowserRouter>

  );
}

export default App;
