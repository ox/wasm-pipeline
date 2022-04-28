import React from "react";

const DataContainer = ({ data }) => {
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
};

export default DataContainer;
