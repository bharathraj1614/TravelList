export function Item(props) {
  return (
    <li key={props.sno}>
      <input
        type="checkbox"
        value={props.item.packed}
        onChange={() => props.handleCheck(props.item.id)}
      />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} {props.item.description}
      </span>
      <button onClick={() => props.handleDelete(props.item.id)}>❌</button>
    </li>
  );
}
