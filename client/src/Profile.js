import React from 'react'

const Profile = ({ user, onLogout }) => {
    console.log(user)

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
    }

    return (
        <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile