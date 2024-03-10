import React from "react";
import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data-with-examples";
import Container from "./Container";

const Concepts = () => {
  return (
    <Container title="Time to get started!" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((core) => (
          <CoreConcepts {...core} key={core.title} />
        ))}
      </ul>
    </Container>
  );
};

export default Concepts;
