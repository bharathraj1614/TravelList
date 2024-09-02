import { useState } from "react";

const initItems = [
  {
    id: 1,
    name: "Phone",
    quantity: 1,
    packed: true,
  },
  {
    id: 2,
    name: "Charger",
    quantity: 1,
    packed: false,
  },
  {
    id: 3,
    name: "Liscense",
    quantity: 3,
    packed: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
    </div>
  );
}

function Logo() {
  return <h1>🌴FAR AWAY✈️🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleChange(e) {
    e.preventDefault();
    const newItem = {
      id: new Date(),
      description,
      quantity,
      packed: false,
    };
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleChange}>
      <h3>What do you need for your trip?😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()]
          .map((i) => i + 1)
          .map((num) => (
            <option key={num}>{num}</option>
          ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {initItems.map((item) => (
          <Item key={item.key} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li key={props.key}>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.name}
      </span>
      <button>❌</button>
    </li>
  );
}

export default App;
