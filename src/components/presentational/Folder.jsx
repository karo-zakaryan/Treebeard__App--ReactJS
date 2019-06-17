import React, { useState } from "react";
import File from "./File";

const Folder = ({ files, name }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);

  const treeContainer = files.map((file, index) => {
    const fileT =
      file.type === "folder" ? <Folder {...file} /> : <File {...file} />;

    return <li key={index}>{fileT}</li>;
  });

  const tree = <ul>{treeContainer}</ul>;

  return (
    <div>
      <span className={expanded ? "expanded" : ""} onClick={toggle}>
        {name}
      </span>
      {expanded ? tree : null}
    </div>
  );
};

export default Folder;
