import React from "react";
import { EXAMPLES } from "../data-with-examples";

const TabContent = ({ selectedTopic }) => {
  return (
    <div id="tab-content">
      {selectedTopic === "" ? (
        <p>Please Select a Topic</p>
      ) : (
        <>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </>
      )}
    </div>
  );
};

export default TabContent;
