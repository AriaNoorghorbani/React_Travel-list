import React, { useRef, useState } from "react";

export default function Form({ onAddItem }) {
  const desRef = useRef();
  const quantityRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredDes = desRef.current.value;
    const enteredQuantity = quantityRef.current.value;
    onAddItem(enteredDes, enteredQuantity);
    desRef.current.value = "";
    quantityRef.current.value = 1;
  }

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input type="text" ref={desRef} placeholder="item..." />
        <select name="" id="" ref={quantityRef}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
