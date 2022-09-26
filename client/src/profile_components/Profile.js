import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProfileEditForm from './ProfileEditForm'


const Profile = ({ user, onLogout, setUser, onLogin }) => {
    const navigate = useNavigate()
    const [toggleEdit, setToggleEdit] = useState(false)

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(user)).then(navigate("/login"))
    }

    const handleEditClick = () => {
        setToggleEdit(!toggleEdit)
        console.log(toggleEdit)
    }

    if (user.first_name) {
        return (

            <div>
                <img src={user.profile_pic} alt="profile picture" width="200" height="200" />
                <h3>{user.first_name} {user.last_name}</h3>
                <h5>Bio:</h5>
                <p>{user.about_me}</p>
                <Button onClick={handleEditClick}>{toggleEdit ? "x" : "edit profile"}</Button>
                {toggleEdit ? <ProfileEditForm user={user} setUser={setUser} onLogin={onLogin}/> : ""}
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Oops!</h1>
                <Link to={"/login"}>Click here to log in</Link>
            </div>
        )
    }

}

export default Profile