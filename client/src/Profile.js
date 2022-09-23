import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = ({ user, onLogout }) => {
    const navigate = useNavigate()
    console.log(user)

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(user)).then(navigate("/login"))
    }

    return (
        <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile