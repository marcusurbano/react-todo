import React, { useState, ChangeEvent, FormEvent } from "react";
import { IAddItem } from "../Types";

export const AddItem: React.FC<IAddItem> = (props) => {
  const [newItem, setNewItem] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onAddItem(newItem);
    setNewItem("");
  };

 
  return (
    <form>
      <input type="text" value={newItem} onChange={onChange}></input>
      <button type="submit" onClick={onSubmit}>Add Task</button>
    </form>
  );
};
