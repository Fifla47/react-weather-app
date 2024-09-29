import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is was coded by{" "}
          <a href="https://github.com/Fifla47" target="_blank">
            Refilwe Phelwane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Fifla47/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
