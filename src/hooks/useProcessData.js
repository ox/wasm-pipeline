import { useState, useEffect } from 'react';

export default function useProcessData(data, fns) {
  const [result, setResult] = useState();
  useEffect(() => {
    const process = async () => {
      let ret = data;
      for (let fn of fns) {
        ret = await fn(ret);
      }
      setResult(ret);
    };

    process();
  }, [data, fns]);

  return result;
}
