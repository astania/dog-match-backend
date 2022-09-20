import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";
import WelcomePage from "./login_components/WelcomePage";

function App() {
 
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
        .then(setLoggedIn(true))
      }
    });
  }, []);

  const onLogin = (userInfo) => {
    setUser(userInfo)
    setLoggedIn(true)
    console.log("user from frontend", user)
  }

  const onLogout = () => {
    setUser({})
    console.log(user, "logged out!")
    setLoggedIn(false)
  }

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={ loggedIn ? <WelcomePage user={user} onLogout={onLogout} /> : <Login onLogin={onLogin} /> } />
        <Route exact path="/login" element={ <Login onLogin={onLogin} />} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;