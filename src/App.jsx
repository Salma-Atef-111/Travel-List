import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import FinalStats from "./Components/FinalStats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <FinalStats items={items} />
    </div>
  );
}
