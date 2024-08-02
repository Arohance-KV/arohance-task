import './App.css';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
