import React from "react";
import { DragDropContext } from 'react-beautiful-dnd';

import useTransformers from "store/transformers";

const TransformersList = () => {
  const functions = useTransformers((state) => state.functions);

  return (
    <DragDropContext>
    <ol>
      {functions.map((transformer) => <li key={transformer.name}>{transformer.name}</li>)}
    </ol>
    </DragDropContext>
  )
};

export default TransformersList;
