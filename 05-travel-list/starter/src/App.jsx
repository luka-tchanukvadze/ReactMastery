import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Something", quantity: 23, packed: false },
  { id: 3, description: "Somethingggg", quantity: 23, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
