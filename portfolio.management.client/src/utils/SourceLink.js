import React from "react";

const SourceLink = (props) => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a
      href="https://www.linedata.com/"
      target="_blank"
      rel="linedata website"
      {...props}
    />
  );
};

export default SourceLink;
