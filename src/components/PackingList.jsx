import React from "react";
import Item from "./Item";

export default function PackingList({ items, onRemoveItem }) {
  return (
    <ul className="list">
      <Item items={items} onRemoveItem={onRemoveItem} />
    </ul>
  );
}
