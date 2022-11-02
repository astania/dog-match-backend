import {React, useState} from 'react'

const LoginForm = ({ onLogin, setIsNewUser, user, setUser }) => {

    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        //to sessions#create
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setUser({
            ...user, [name]: value
        })
    }


    return (
        <div className="text-center">
            <h4>Log in below:</h4>

            <form className="mb-4" onSubmit={handleSubmit}>

                <div className="form-group mb-1">
                    <label> Username
                        <input className="form-control" type="text" name="username" placeholder="name@example.com" value={user.username} onChange={handleChange} />
                    </label>
                </div>

                <div className="form-group mb-1">
                    <label> Password
                        <input className="form-control" type="password" name="password" placeholder="*******" value={user.password} onChange={handleChange} />
                    </label>
                </div>

                {errors.length > 0 ? 
                    <div style={{ color: "red" }}>
                        {errors.map((error) => (
                            <em key={error}> {error} </em>
                        ))}
                    </div> 
                : ""}

                <button className="btn btn-primary" type="submit" value="Login">Login</button>

            </form>
            <h4 className="mb-4">Are you new here? Create an account below:</h4>
            <button className="btn btn-secondary" onClick={() => setIsNewUser(true)}>Create Account</button>


        </div>
    )
}

export default LoginForm