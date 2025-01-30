import { useState } from "react";

export function Form({ onHandleChange }) {
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
    if (description) {
      onHandleChange(newItem);
      setDescription("");
      setQuantity(1);
      console.log(newItem);
    }
  }
  return (
    <form className="add-form" onSubmit={handleChange}>
      <h3>What do you need for your trip?😍</h3>
      <select
        id="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()]
          .map((i) => i + 1)
          .map((num) => (
            <option id={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input
        id="Item"
        type="text"
        placeholder="item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        autoComplete="off"
      />
      <button>Add</button>
    </form>
  );
}
