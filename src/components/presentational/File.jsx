import React from "react";

const File = ({ name }) => {
  const type = name.slice(name.lastIndexOf(".") + 1);

  return (
    <span style={{ backgroundImage: `url(tutorial/icons/${type}.svg)` }}>
      {name}
    </span>
  );
};

export default File;
