import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProfileEditForm from './ProfileEditForm'
import DogContainer from '../dog_components/DogContainer'


const Profile = ({ user, onLogout, setUser, onLogin, onDeleteUser }) => {
    const navigate = useNavigate()
    const [toggleEdit, setToggleEdit] = useState(false)

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout(user)).then(navigate("/"))
    }

    const handleEditClick = () => {
        setToggleEdit(!toggleEdit)
    }

    const handleDelete = () => {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then(() => onDeleteUser(user)).then(navigate("/"))
    }

    if (user.first_name) {
        return (

            <div>
                <img src={user.profile_pic} alt="profile" width="200" height="200" />
                <h3>{user.first_name} {user.last_name}</h3>
                <h5>Bio:</h5>
                <p>{user.about_me}</p>
                <Button onClick={handleEditClick}>{toggleEdit ? "x" : "edit profile"}</Button>
                {toggleEdit ? <ProfileEditForm user={user} setUser={setUser} onLogin={onLogin} setToggleEdit={setToggleEdit} /> : ""}
                <DogContainer dogs={user.dogs}/>
                <Button onClick={handleLogout}>Logout</Button>
                <Button onClick={handleDelete}>Delete Profile</Button>
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