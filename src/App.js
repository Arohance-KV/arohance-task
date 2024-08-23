import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from './Components/ContactUs';
import { Careers } from './Components/Careers';
import Footer from './Components/Footer';
import Community from './Components/Community';

function App() {
  return (
    <>
    {/* <div className="App">
      <Navbar />
      <HomePage />
      <Info />
      <Footer />
    </div> */}
    <div className='App'>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/community' element={<Community />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </div>

  </>
  );
}

export default App;
