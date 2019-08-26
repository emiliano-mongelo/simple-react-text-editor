import React from "react";
import "./FileZone.css";

function FileZone() {
  return (
    <div id="file-zone">
      <div id="file">
        <p className="content" contentEditable />
      </div>
    </div>
  );
}

export default FileZone;
