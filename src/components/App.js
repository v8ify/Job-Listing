import React from "react";
import "./App.css";

import JobsList from "./JobsList";
import FiltersBar from "./FiltersBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FiltersBar />
      </header>
      <JobsList />
    </div>
  );
}

export default App;
