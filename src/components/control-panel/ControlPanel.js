import React, { useCallback } from "react";
import "./ControlPanel.css";
import * as availablePlugins from "../../plugins";

function ControlPanel({ setLoading }) {
	const handleClick = useCallback((e, plugin) => {
		availablePlugins[plugin].apply({ setLoading });
	}, []);
  return (
    <div id="control-panel">
      <div id="format-actions">
        {Object.keys(availablePlugins).map((plugin, i) => (
          <button
            key={i}
            className="format-action"
            type="button"
            onClick={e => handleClick(e, plugin)}
            dangerouslySetInnerHTML={{ __html: availablePlugins[plugin].label }}
          />
        ))}
      </div>
    </div>
  );
}

export default ControlPanel;
