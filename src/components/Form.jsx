import React from "react";

export default function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <form className="add-form">
        <input type="text" />
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
