import React from "react";
import logo from "./logo.svg";
import "./App.css";
const v3ApiKey = process.env.REACT_APP_V3_AUTH_API_KEY;

const App: React.FC = () => {
  return <div className="App">{v3ApiKey}</div>;
};

export default App;
