import React from "react";
import "./FileZone.css";

  function FileZone({ text }) {
    return (
      <div id="file-zone">
        <div id="file">
          <p
            className="content"
            suppressContentEditableWarning={true}
            contentEditable
          >{ text }</p>
        </div>
      </div>
    );
}

export default FileZone;
