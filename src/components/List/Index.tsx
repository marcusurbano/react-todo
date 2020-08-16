import React from "react";
import ListItemComp from "../ListItem/Index";
import { IList } from "../Types";

export const ListComp: React.FC<IList> = (props) => {
  const items = props.Items;
  const onSelectItem = props.OnSelectedItem;
  const onRemoveItem = props.OnRemoveItem;
  
  return (
    <ul>
      {items.map((item) => {
        return <ListItemComp Item={item} OnSelectedItem={onSelectItem} OnRemoveItem = {onRemoveItem}/>;
      })}
    </ul>
  );
};
