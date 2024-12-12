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
import ShowSensor from "./pages/sensores/sensor.jsx";
import PrivateRoute from "./componentes/Routeprivate.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/temperatura" element={<PrivateRoute component={Temp} />} />
        <Route path="/contador" element={<PrivateRoute component={Contador} />} />
        <Route path="/umidade" element={<PrivateRoute component={Umidade} />} />
        <Route path="/luminosidade" element={<PrivateRoute component={Luminosidade} />} />
        <Route path="/login/up" element={<LoginUp />} />
        <Route path="/graficTemp" element={<Tempgrafic/>} />"
        <Route path="/graficCont" element={<Contgrafic/>} />
        <Route path="/graficLumi" element={<Lumigrafic/>} />
        <Route path="/graficUmi" element={<Umigrafic/>} />
        <Route path="/sensores" element={<PrivateRoute component={ShowSensor} />} />
      </Routes>
    </Router>
  );
};

export default App;
