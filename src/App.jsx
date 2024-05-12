import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About, Contact, Header, Home, Services } from "./componentContainer"

function App() {

  const navBar = [{ name: "services", path: "/services" }, { name: "about", path: "/about" }, { name: "contact", path: "/contact" }]

  return (
    <BrowserRouter>
      <Header links={navBar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
