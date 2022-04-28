import React, { useEffect } from "react";
import DataContainer from "components/DataContainer";
import AddTransform from "components/AddTransform";
import TransformersList from "components/TransformersList"
import useDataStore from "store/data";
import useTransformers from "store/transformers";

import data from "./data";

import "./reset.css";
import "./App.css";
import useTransformersResult from "../../hooks/useTransformersResult";

const App = () => {
  const ds = useDataStore();
  useEffect(() => {
    ds.set(data);
  }, []);

  const transforms = useTransformers((state) => ({
    registerFunction: state.registerFunction,
    loadWASMFromPath: state.loadWASMFromPath,
    setOrder: state.setOrder,
    order: state.order,
  }));

  useEffect(() => {
    window.registerTransformFn = (name, fn) => {
      transforms.registerFunction(name, fn);
      console.log("registered", name);
    };

    return () => window.registerTransformFn = undefined;
  }, []);

  useEffect(() => {
    transforms.loadWASMFromPath("/wasm/main.wasm");
    transforms.setOrder(["negative"]);
  }, []);

  const result = useTransformersResult(ds.data);

  return <div className="flex">
    <div className="flex-1">
      <DataContainer data={ds.data} />
    </div>
    <div className="flex-1">
      <AddTransform />
      <TransformersList />
    </div>
    <div className="flex-1">
      <DataContainer data={result} />
    </div>
  </div>
}

export default App;
