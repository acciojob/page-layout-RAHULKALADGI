import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


let header = "Welcome to my website.";
let footer = "@ 2023 My Website. All rights reserved."
ReactDOM.render(<App header={header} footer={footer}><p>This is the content of my website.</p></App> , document.getElementById("root"));
