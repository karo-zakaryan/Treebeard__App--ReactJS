import React from "react";
import Folder from "../presentational/Folder";

const Main = ({ data }) => {
  return <Folder name="Root" files={data} />;
};

export default Main;
