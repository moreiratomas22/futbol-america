import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from "./componentContainer"

function App() {

  const navBar = [{ name: "services", path: "/services" }, { name: "about", path: "/about" }, { name: "contact", path: "/contact" }]

  return (
    <BrowserRouter>
      <Header links={navBar} />
      
    </BrowserRouter>
  );
}

export default App;
