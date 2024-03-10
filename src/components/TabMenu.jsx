import TabButtons from "./TabButtons";

const TabMenu = ({ selectedTopic, setSelectedTopic }) => {
  const handleClick = (selectedBtn) => {
    setSelectedTopic(selectedBtn);
  };
  return (
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
  );
};

export default TabMenu;
