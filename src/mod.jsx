import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import ReactDOM from "react-dom/client"


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
