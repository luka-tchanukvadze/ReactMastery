const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Something", quantity: 23, packed: false },
  { id: 2, description: "Somethingggg", quantity: 23, packed: true },
];

export default function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <h1>😁 Fara Away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed x (x%)
    </footer>
  );
}
