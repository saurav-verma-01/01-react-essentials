import { CORE_CONCEPTS, EXAMPLES } from "./data-with-examples";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const handleClick = (selectedBtn) => {
    setSelectedTopic(selectedBtn);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((core) => (
              <CoreConcepts {...core} key={core.title} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
