import React from 'react';
import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import DeviceProvider from "./util/deviceHook";
import Header from "./header/header";
import { usePage } from "./util/pageHook";
import { PageTypes } from "./util/constants";

function App() {
  const {page} = usePage();
  return (
    <div className={"App"}>
      <DeviceProvider>
        <Header/>
        {page === PageTypes.HOME
        ? <Home/>
        : <About/>}
      </DeviceProvider>
    </div>
  );
}

export default App;
