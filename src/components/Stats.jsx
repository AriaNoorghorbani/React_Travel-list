import React from "react";

export default function Stats({ totalItemsCount, packedNum, percentage }) {
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {totalItemsCount} items on your list, and you already packed
          {packedNum} ({percentage ? percentage : 0}%).
        </em>
      ) : (
        <em>You are ready to go✈️</em>
      )}
    </footer>
  );
}
