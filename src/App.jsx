import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(enteredDes, enteredQuantity, packed) {
    const randomId = Math.random();
    const newItem = {
      description: enteredDes,
      quantity: enteredQuantity,
      id: randomId,
      packed: packed,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleRemoveItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function handlePackedItem(id) {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const totalItemsCount = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedNum / totalItemsCount) * 100);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onPacked={handlePackedItem}
      />
      <Stats
        totalItemsCount={totalItemsCount}
        packedNum={packedNum}
        percentage={percentage}
      />
    </div>
  );
}

export default App;
