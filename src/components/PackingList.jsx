import React from "react";
import Item from "./Item";

export default function PackingList({ items, onRemoveItem, onPacked }) {
  return (
    <ul className="list">
      <Item items={items} onRemoveItem={onRemoveItem} onPacked={onPacked} />
    </ul>
  );
}
