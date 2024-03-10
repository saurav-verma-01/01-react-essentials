import React, { useState } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";

const Tabs = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  return (
    <>
      <TabMenu
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <TabContent selectedTopic={selectedTopic} />
    </>
  );
};

export default Tabs;
