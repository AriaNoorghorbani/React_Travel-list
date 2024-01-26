import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onRemoveItem, onPacked }) {
  const [sortBy, setSortBy] = useState("input");

  console.log(sortBy);
  console.log(items);
  let sortedItem;

  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        <Item
          items={sortedItem}
          onRemoveItem={onRemoveItem}
          onPacked={onPacked}
        />
      </ul>
      <div className="actions">
        <p>Sort by</p>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Input</option>
          <option value="description">Description</option>
          <option value="packed">Packed</option>
        </select>
      </div>
    </div>
  );
}
