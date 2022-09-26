import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


const Profile = ({ user, onLogout }) => {
    const navigate = useNavigate()
    console.log(user)

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(user)).then(navigate("/login"))
    }

    if (user.first_name){
        return (
        
            <div>
                <img src={user.profile_pic}alt="profile picture" width="200" height="200"/>
                <h3>{user.first_name} {user.last_name}</h3>
                <h5>Bio:</h5>
                <p>{user.about_me}</p>
                <Button>edit profile</Button>
                <button>edit profile</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    } else{
        return (
            <div>
                <h1>Oops!</h1>
                <Link to={"/login"}>Click here to log in</Link>
                </div>
        )
    }
    
}

export default Profile