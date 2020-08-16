import React from "react";
import { IListItemParam } from "../Types";
import "./Index.css";

const ListItemComp: React.FC<IListItemParam> = (props)=>{
    const item = props.Item;
    const selectItem = props.OnSelectedItem;
    const removeItem = props.OnRemoveItem;
    return (
      <li key={item.key}>
        <label className={item.complete ? "todo-item-complete" : undefined}>
          <input type="checkbox" checked={item.complete} onChange={()=> selectItem(item)} />
          {item.text}
        </label>
        <button type="button" className="removeItem" onClick={()=>removeItem(item)}>X</button>
      </li>
    );
}

export default ListItemComp;
