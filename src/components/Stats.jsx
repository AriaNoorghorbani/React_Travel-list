import React from "react";

export default function Stats({ items }) {
  const totalItemsCount = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedNum / totalItemsCount) * 100);

  let element = (
    <em> Input your list and be sure you are not forget anything</em>
  );

  if (totalItemsCount > 0 && percentage !== 100) {
    element = (
      <em>
        You have {totalItemsCount} items on your list, and you already packed
        {packedNum} ({percentage ? percentage : 0}%).
      </em>
    );
  } else if (percentage === 100) {
    element = <em>You are ready to go✈️</em>;
  }

  return <footer className="stats">{element}</footer>;
}
