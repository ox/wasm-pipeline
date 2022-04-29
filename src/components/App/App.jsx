import React, { useCallback, useEffect, useMemo} from "react";
import DataContainer from "components/DataContainer";
import AddTransform from "components/AddTransform";
import TransformersList from "components/TransformersList"
import useDataStore from "store/data";
import useTransformers from "store/transformers";
import useProcessData from "hooks/useProcessData";

import data from "./data";

import "./reset.css";
import "./App.css";

const App = () => {
  const ds = useDataStore();
  useEffect(() => {
    ds.set(data);
  }, []);

  const transforms = useTransformers();
  useEffect(() => {
    window.registerTransformFn = (name, fn) => {
      transforms.registerFunction(name, fn);
      console.log("registered", name);
    };

    transforms.loadWASMFromPath("/wasm/main.wasm");
  
    return () => window.registerTransformFn = undefined;
  }, []);

  const fns = useMemo(() => transforms.functions.map(({fn}) => fn), [transforms.functions]);
  const result = useProcessData(ds.data, fns);

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
