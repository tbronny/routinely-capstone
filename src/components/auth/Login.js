import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import LoginLogo from "../Images/LoginLogo.png"
import "./Login.css"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then((res) => res.json())
            .then((user) => (user.length ? user[0] : false))
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck().then((exists) => {
            if (exists) {
                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                sessionStorage.setItem("routinely_user", exists.id)
                history.push("/")
            } else {
                setExistDialog(true)
            }
        })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button
                    className="button--close"
                    onClick={(e) => setExistDialog(false)}
                >
                    Close
                </button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>
                        <img
                            src={LoginLogo}
                            className="login_image"
                            alt="logo"
                        />
                    </h1>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required
                            autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset>
                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                history.push("/register")
                            }}
                        >
                            Register for an account
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register"></section>
        </main>
    )
}
