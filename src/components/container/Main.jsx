import React from "react";
import Folder from "../presentational/Folder";

const Main = ({ data }) => {
  return (
    <div className="page-container">
      <div className="tree-container">
        <Folder name="Root" files={data} />
      </div>
    </div>
  );
};

export default Main;
