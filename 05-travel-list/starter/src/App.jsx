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
    <div className="add-from">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      You have X items on your list, and you already packed x (x%)
    </footer>
  );
}
