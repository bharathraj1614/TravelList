export function Stats({ items }) {
  const itemsCount = items.length;

  if (!itemsCount) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list ✈️</em>
      </footer>
    );
  }

  const packedCount = items.filter((item) => item.packed === true).length;
  return (
    <footer className="stats">
      <em>
        {itemsCount === packedCount
          ? "You have packed everything! Ready to go 🕊️"
          : `You have packed ${packedCount} out of ${itemsCount} which is ${Math.round(
              (packedCount / itemsCount) * 100
            )}%`}
      </em>
    </footer>
  );
}
