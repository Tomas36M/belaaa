import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Research from './pages/research/Research';
import Teaching from './pages/teaching/Teaching'
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
    </Router>
  );
}

export default App;