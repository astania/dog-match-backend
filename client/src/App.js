import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";
import WelcomePage from "./login_components/WelcomePage";
import Footer from "./navigation_components/Footer";
import Header from "./navigation_components/Header";
import Profile from "./Profile";
import NavBar from "./navigation_components/NavBar";


function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
          .then(setLoggedIn(true))
      }
    });
  }, []);

  const onLogin = (userInfo) => {
    setUser(userInfo)
    setLoggedIn(true)
  }

  const onLogout = () => {
    setUser({})
    setLoggedIn(false)
  }

  return (
    <BrowserRouter>
      <Header />
      {loggedIn ? <NavBar /> : ""}
      <Routes>
        <Route exact path="/" element={loggedIn ? <WelcomePage user={user} onLogout={onLogout} /> : <Login user={user} onLogin={onLogin} />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} />} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
        <Route exact path="/profile" element={<Profile user={user} onLogout={onLogout} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;