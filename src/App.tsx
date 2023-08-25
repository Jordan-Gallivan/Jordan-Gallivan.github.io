import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import DeviceProvider from "./util/deviceHook";
import Header from "./header/header";

function App() {
  return (
    <div className={"App"}>
      <DeviceProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </DeviceProvider>
    </div>
  );
}

export default App;
