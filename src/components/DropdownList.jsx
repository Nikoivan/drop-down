export default function DropdownList({ list }) {
  const listStyles = {
    position: "absolute",
    listStyleType: "none",
    padding: "10px",
    minWidth: "225px",
    borderRadius: "5px",
    backgroundColor: "#fff",
  };
  const itemStyles = {
    color: "#000",
    padding: "10px",
    borderBottom: "1px solid #000",
  };

  return (
    <ul className="menu-list" style={listStyles}>
      {list.map((el, id) => (
        <li key={id} style={itemStyles} className="menu-item">
          {el}
        </li>
      ))}
    </ul>
  );
}
