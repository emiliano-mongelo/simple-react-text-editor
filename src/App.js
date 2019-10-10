import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/loader/Loader.component";
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import getMockText from './text.service';

function App() {
  const [mockText, setMockText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    async function getDefaultText() {
      const mockText = await getMockText();
      setMockText(mockText)
    }
    getDefaultText();
  }, []);

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        {loading && <Loader />}
        <ControlPanel setLoading={setLoading} />
        <FileZone text={mockText} />
        <div id='modal' />
      </main>
    </div>
  );
}

export default App;
