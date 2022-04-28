import { useState, useEffect } from "react";

import useTransformers from "store/transformers";

export default function useTransformersResult(data) {
  const {order, functions} = useTransformers((state) => ({order: state.order, functions: state.functions}));

  const [result, setResult] = useState();
  useEffect(() => {
    const process = async () => {
      let ret = data;
      for (let name of order) {
        ret = await functions[name](ret);
      }
      setResult(ret);
    }

    process();
  }, [data, order, functions]);

  return result;
} 
