import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import useTransformers from 'store/transformers';

const TransformersList = () => {
  const { functions, setFunctions } = useTransformers();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(functions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFunctions(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="transformers">
        {(provided) => (
          <ol {...provided.droppableProps} ref={provided.innerRef}>
            {functions.map((transformer, idx) => (
              <Draggable key={transformer.name} draggableId={transformer.name} index={idx}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="border p-2"
                  >
                    {transformer.name}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TransformersList;
