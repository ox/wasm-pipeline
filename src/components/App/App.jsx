import React from "react";
import DataContainer from "components/DataContainer/DataContainer";
import AddTransform from "components/AddTransform/AddTransform";

import data from "./data";

import "./reset.css";
import "./App.css";

const App = () => {
  return <div className="flex">
    <div className="flex-1">
      <DataContainer data={data} />
    </div>
    <div className="flex-1">
      <AddTransform />
    </div>
    <div className="flex-1">
      <DataContainer data={null} />
    </div>
  </div>
}

export default App;
