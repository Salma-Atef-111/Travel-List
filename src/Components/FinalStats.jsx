export default function FinalStats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🙄☝️</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? `You got everything! Ready to go now ✈️`
            : `🎒 You have ${numItem} items on your list , and you aleady packed
            ${numPacked}(${percentage}%)`}
        </em>
      </footer>
    </>
  );
}
