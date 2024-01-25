import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(enteredDes, enteredQuantity) {
    const randomId = Math.random();
    const newItem = {
      description: enteredDes,
      quantity: enteredQuantity,
      id: randomId,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleRemoveItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onRemoveItem={handleRemoveItem} />
      <Stats />
    </div>
  );
}

export default App;
