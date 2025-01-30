import { useState } from "react";
import { Item } from "./Item";

export function List({ items, handleDelete, handleCheck, handleClear }) {
  const [filterBy, setFilter] = useState("order");

  let sortedItems = items;

  if (filterBy === "name") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (filterBy === "packing") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            sno={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={filterBy} onChange={(e) => setFilter(e.target.value)}>
          <option value={"order"}>Filter by order</option>
          <option value={"name"}>Filter by name</option>
          <option value={"packing"}>Filter by Packing status</option>
        </select>
        <button onClick={handleClear}> Clear all</button>
      </div>
    </div>
  );
}
