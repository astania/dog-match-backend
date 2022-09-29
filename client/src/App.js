import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";
import WelcomePage from "./login_components/WelcomePage";
import Footer from "./navigation_components/Footer";
import Header from "./navigation_components/Header";
import Profile from "./profile_components/Profile";
import NavBar from "./navigation_components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    about_me: "",
    profile_pic: ""
  })
  const [loggedIn, setLoggedIn] = useState(false)

console.log(user)

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
      {!!loggedIn ? <NavBar /> : ""}
      <Routes>
        <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} />} />
        <Route exact path="/testing" element={<h1>Test Route</h1>} />
        <Route exact path="/profile" element={<Profile user={user} onLogout={onLogout} setUser={setUser} onLogin={onLogin} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;