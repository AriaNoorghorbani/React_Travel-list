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
      packed: false,
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

  function handleClearList() {
    const confirmed = window.confirm("are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onPacked={handlePackedItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
