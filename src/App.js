import React from "react";
import "./App.css";
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";

function App() {
  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <ControlPanel />
        <FileZone />
      </main>
    </div>
  );
}

export default App;
