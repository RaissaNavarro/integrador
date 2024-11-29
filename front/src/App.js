import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login/in/index.jsx";
import LoginUp from "./pages/login/up"
import Temp from "./pages/temp"
import Contador from "./pages/cont/index.jsx";
import Umidade from "./pages/umid/index.jsx";
import Luminosidade from "./pages/lumi/index.jsx";
import Tempgrafic from "./pages/graficos/graficTemp.jsx";
import Contgrafic from "./pages/graficos/graficCont.jsx";
import Lumigrafic from "./pages/graficos/graficLumi.jsx";
import Umigrafic from "./pages/graficos/graficUmi.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temperatura" element={<Temp />} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/umidade" element={<Umidade/>} />
        <Route path="/luminosidade" element={<Luminosidade/>} />
        <Route path="/login/up" element={<LoginUp />} />
        <Route path="/graficTemp" element={<Tempgrafic/>} />"
        <Route path="/graficCont" element={<Contgrafic/>} />
        <Route path="/graficLumi" element={<Lumigrafic/>} />
        <Route path="/graficUmi" element={<Umigrafic/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
