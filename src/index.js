import "./index.css";
import "./assets/css/share.css";

import React from "react";
import ReactDOM from "react-dom";
import { register } from "./serviceWorker";

import App from "./App.jsx";

const wrapper = document.getElementById("root");

register();
ReactDOM.render(<App />, wrapper);
