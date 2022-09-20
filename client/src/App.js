import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState({})

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  const onLogin = (userInfo) => {
    setUser(userInfo)
    console.log(user)
  }

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={ user ? <WelcomePage user={user} /> : <Login onLogin={onLogin} /> } />
        <Route exact path="/login" element={ <Login onLogin={onLogin} />} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;