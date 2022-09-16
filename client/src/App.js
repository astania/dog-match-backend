import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Page Count: {count}</h1>} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;