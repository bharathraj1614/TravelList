import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { List } from "./List";
import { Stats } from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleChange = (item) => setItems([...items, item]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    const confirm = window.confirm("Do you want to clear all items??");
    if (confirm) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onHandleChange={handleChange} />
      <List
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
