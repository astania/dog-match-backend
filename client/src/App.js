import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";

function App() {
  const [count, setCount] = useState(0);
  const [currentGuest, setCurrentGuest] = useState({})

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const onLogin = (user) => {
    setCurrentGuest(currentGuest.username = user)
    console.log(currentGuest)
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Page Count: {count}</h1>} />
        <Route exact path="/login" element={ <Login onLogin={onLogin} />} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;