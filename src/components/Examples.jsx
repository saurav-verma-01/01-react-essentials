import React, { useState } from "react";
import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data-with-examples";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const handleClick = (selectedBtn) => {
    setSelectedTopic(selectedBtn);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButtons
          onButtonClick={() => handleClick("components")}
          isSelected={selectedTopic === "components"}
        >
          Components
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "jsx"}
          onButtonClick={() => handleClick("jsx")}
        >
          JSX
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "props"}
          onButtonClick={() => handleClick("props")}
        >
          Props
        </TabButtons>
        <TabButtons
          isSelected={selectedTopic === "state"}
          onButtonClick={() => handleClick("state")}
        >
          State
        </TabButtons>
      </menu>
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
    </section>
  );
};

export default Examples;
