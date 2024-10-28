import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); //lift up state to the parent Component

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  //  lift up state to the parent Component }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, package: false, id: Date.now() };
    console.log(newItem);

    handleAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      {/* عملنا onsubmit في الفورم كلها بدل ال btn بس مانعمله اون كليك عشان لو ال يوزر داس enter فاتشتغل كده وكده  */}
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
