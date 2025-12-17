import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to the React reusable components example."
      />

      <MessageCard
        title="React Props"
        message="Props allow data to be passed from parent to child components."
      />

      <MessageCard
        title="Reusable Components"
        message="Reusable components reduce code duplication."
      />

      <MessageCard
        title="Vite + React"
        message="Vite provides a fast development experience."
      />
    </div>
  );
}

export default App;
