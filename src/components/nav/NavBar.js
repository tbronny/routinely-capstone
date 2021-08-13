import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../Images/Logo.png"
import "./NavBar.css"
import { UserContext } from "../users/UserProvider"
import { SimpleMenu } from "./SimpleMenu"

export const NavBar = (props) => {
    const { users, getUsers } = useContext(UserContext)

    const currentUser = users.find((user) => {
        if (user.id === parseInt(sessionStorage.getItem("routinely_user")))
            return user
    })

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <nav className="navbar flex-md-nowrap p-0 shadow" id="topnav">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <img
                                src={Logo}
                                id="nav-logo"
                                alt="logo"
                                height={50}
                                width={50}
                            />
                            <h2>Routinely</h2>
                        </Link>
                    </li>
                </ul>
                <h4>
                    <b>
                        <i>Welcome, {currentUser?.firstName}!</i>
                    </b>
                </h4>
                {SimpleMenu()}
            </nav>
        </>
    )
}
