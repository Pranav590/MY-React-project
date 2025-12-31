import React, { useState, Suspense } from "react";

// Lazy load the heavy component
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <p>Counter Value: {count}</p>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
