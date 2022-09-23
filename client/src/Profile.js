import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
                <h3>{user.first_name} {user.last_name}</h3>
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