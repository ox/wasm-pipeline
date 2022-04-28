import React from "react";
import useTransformers from "store/transformers";

const TransformersList = () => {
  const transformers = useTransformers((state) => state.order);

  return (
    <ol>
      {transformers.forEach((transformer) => <li>{transformer}</li>)}
    </ol>
  )
};

export default TransformersList;
