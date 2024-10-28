import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}
