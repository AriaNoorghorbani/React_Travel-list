import React, { Fragment, useState } from "react";

export default function Item({ items, onRemoveItem, onPacked }) {
  return (
    <li>
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => onPacked(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.description} {item.quantity}
            </span>
            <button onClick={() => onRemoveItem(item.id)}>❌</button>
          </Fragment>
        );
      })}
    </li>
  );
}
