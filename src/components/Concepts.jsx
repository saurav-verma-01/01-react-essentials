import React from "react";
import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data-with-examples";

const Concepts = () => {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((core) => (
          <CoreConcepts {...core} key={core.title} />
        ))}
      </ul>
    </section>
  );
};

export default Concepts;
