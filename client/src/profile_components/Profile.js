import { React, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProfileEditForm from './ProfileEditForm'
import DogContainer from '../user_dog_components/DogContainer'
import Container from 'react-bootstrap/Container';


const Profile = ({ user, onLogout, setUser, onLogin, onDeleteUser, onEditDog, onDeleteDog }) => {
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
            <Container>
                <div className="text-center">
                    <img src={user.profile_pic} alt="profile" height="200" />
                    <h3>{user.first_name} {user.last_name}</h3>
                    <h5>Bio:</h5>
                    <p>{user.about_me}</p>
                    <Button className="btn btn-primary mb-3" onClick={handleEditClick}>{toggleEdit ? "x" : "edit profile"}</Button>
                    <Button className="btn btn-secondary mb-3" onClick={handleLogout}>Logout</Button>
                    <br></br>
                    <Button className="btn btn-secondary mb-3" onClick={handleDelete}>Delete Profile</Button>
                    {toggleEdit ? <ProfileEditForm user={user} setUser={setUser} onLogin={onLogin} setToggleEdit={setToggleEdit} /> : ""}
                    <h5>My Dogs:</h5>
                    <DogContainer dogs={user.dogs} onEditDog={onEditDog} onDeleteDog={onDeleteDog} />


                </div>
            </Container>
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