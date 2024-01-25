import React, { Fragment } from "react";

export default function Item({ items, onRemoveItem }) {
  return (
    <li>
      {items.map((item) => {
        return (
          <Fragment key={item.id}>
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
