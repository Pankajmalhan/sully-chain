import { EthProvider, useEth } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Intro />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
