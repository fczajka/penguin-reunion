import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DatePickerConf from "./DatePickerConf.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DatePickerConf>
      <App />
    </DatePickerConf>
  </React.StrictMode>,
);
