import React from "react";
import Item from "./Item";

const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Glass",
    quantity: 2,
    packed: false,
  },
  {
    id: 3,
    description: "Car",
    quantity: 1,
    packed: true,
  },
];

export default function PackingList() {
  return (
    <ul className="list">
      <Item items={initialItems} />
    </ul>
  );
}
