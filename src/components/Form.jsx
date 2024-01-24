import React, { useState } from "react";

export default function Form() {
  const [description, setDescription] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = description;
    console.log(newItem);
    setDescription("");
  }

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <select name="" id="">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}
