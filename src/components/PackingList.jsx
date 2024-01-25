import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onRemoveItem, onPacked }) {
  const [sort, setSort] = useState();
  console.log(sort);
  return (
    <div className="list">
      <ul>
        <Item items={items} onRemoveItem={onRemoveItem} onPacked={onPacked} />
      </ul>
      <div className="actions">
        <p>Sort by</p>
        <select value={(e) => setSort(e.target.value)}>
          <option value="input">Input</option>
          <option value="description">Description</option>
          <option value="packed">Packed</option>
        </select>
      </div>
    </div>
  );
}
