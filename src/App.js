import './App.css';
import './components/home.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Client from './components/Client';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/product" element={<Product/>}/>
            <Route exact path="/client" element={<Client/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
