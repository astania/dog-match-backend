import React from 'react'

const LoginForm = ({ onLogin, setIsNewUser, user, setUser }) => {

    function handleSubmit(e) {
        e.preventDefault()

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
                    // res.json().then( e => setErrors(Object.entries(e.error).flat()))
                    // res.json().then( e => console.log("Errors:", e))
                    console.log("error")
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

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Username
                        <input className="form-control" type="text" name="username" placeholder="name@example.com" value={user.username} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <label> Password
                        <input className="form-control" type="text" name="password" placeholder="*****" value={user.password} onChange={handleChange} />
                    </label>
                </div>

                <button className="btn btn-primary" type="submit" value="Login">Login</button>
            </form>
            <h4>Are you new here? Create an account below:</h4>
            <button className="btn btn-secondary" onClick={() => setIsNewUser(true)}>Create Account</button>


        </div>
    )
}

export default LoginForm