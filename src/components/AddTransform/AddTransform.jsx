import React from "react";

const AddTransform = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Function Name: <input type="text" name="name" /></label><br/>
      <label>WASM File: <input type="file" name="file" /></label><br/>
      <input type="submit" value="Add Transform"></input>
    </form>
  );
};

export default AddTransform;
