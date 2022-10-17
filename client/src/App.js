import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "./login_components/Login";
import WelcomePage from "./login_components/WelcomePage";
import Footer from "./navigation_components/Footer";
import Header from "./navigation_components/Header";
import Profile from "./profile_components/Profile";
import NavBar from "./navigation_components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllDogsContainer from "./dog_components/AllDogsContainer";
import AddDogContainer from "./add_dog_components/AddDogContainer";
import PlayDatesContainer from "./play_dates_components/PlayDatesContainer";

// sudo service postgresql start

function App() {
  const blankUserTemplate = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    about_me: "",
    profile_pic: "",
    dogs: []
  }

  const [user, setUser] = useState(blankUserTemplate)
  const [loggedIn, setLoggedIn] = useState(false)
  const [allDogs, setAllDogs] = useState([])
  const [requestedDogs, setRequestedDogs] = useState([])
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => setUser(userInfo))
          .then(setLoggedIn(true))
      }
    });
  }, []);

  useEffect(() => {
    fetch("/dogs")
    .then(r => r.json())
    .then(fetchedDogs => setAllDogs(fetchedDogs)) 
  }, [])

  const onLogin = (userInfo) => {
    setUser(userInfo)
    setLoggedIn(true)
  }

  const onDeleteUser = (userInfo) => {
    console.log("delete!!", userInfo)
    setUser(blankUserTemplate)
    setLoggedIn(false)
  }

  const onLogout = () => {
    setUser(blankUserTemplate)
    setLoggedIn(false)
  }

  const onEditDog = (updatedDog) => {
    const updatedDogArray = user.dogs.map(dog => dog.id == updatedDog.id ? updatedDog : dog)
    setUser({...user, dogs: updatedDogArray})
    const updatedDogs = allDogs.map(dog => dog.id == updatedDog.id ? updatedDog : dog)
    setAllDogs(updatedDogs)
  }

  const onAddDog = (newDog) => {
    const newDogs = [...user.dogs, newDog]
    setUser({...user, dogs: newDogs})
    setAllDogs([...allDogs, newDog])
  }

  const onDeleteDog = (id) => {
    const filteredDogs = user.dogs.filter(dog => dog.id !== id)
    setUser({...user, dogs: filteredDogs})
  }

  const onAddRequestedDog = (dog) => {
    const requestedDogIds = requestedDogs.map(dog => dog.id)
    console.log("requested dog ids:",requestedDogIds)
    if(!requestedDogIds.includes(dog.id)){
      setRequestedDogs([...requestedDogs, dog])
    } else {
      console.log("oops! dog already added")
    }
  }

  const onRemoveRequestedDog = (dog) => {
    const removedDogs = requestedDogs.filter(req => req.id !== dog.id)
    setRequestedDogs(removedDogs)
    
  }

  return (
    <BrowserRouter>
      <Header />
      {!!loggedIn ? <NavBar /> : ""}
      <Routes>
        <Route exact path="/" element={!!loggedIn ? <WelcomePage user={user} /> : <Login user={user} setUser={setUser} onLogin={onLogin} />} />
        <Route exact path="/login" element={<Login onLogin={onLogin} />} />
        <Route exact path="/alldogs" element={<AllDogsContainer allDogs={allDogs} user={user} onAddRequestedDog={onAddRequestedDog} onRemoveRequestedDog={onRemoveRequestedDog} requestedDogs={requestedDogs}/>} />
        <Route exact path="/profile" element={<Profile user={user} onLogout={onLogout} setUser={setUser} onLogin={onLogin} onDeleteUser={onDeleteUser} onEditDog={onEditDog} onDeleteDog={onDeleteDog}/>} />
        <Route exact path="/adddog" element={<AddDogContainer user={user} onAddDog={onAddDog}/>} />
        <Route exact path="/playdates" element={<PlayDatesContainer user={user} requestedDogs={requestedDogs} setRequestedDogs={setRequestedDogs} onRemoveRequestedDog={onRemoveRequestedDog} /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;