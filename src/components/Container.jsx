import React from "react";

const Container = ({ title, children, ...rest }) => {
  return (
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Container;
