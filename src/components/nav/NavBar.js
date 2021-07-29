import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../Images/Logo.png"
import "./NavBar.css"
import { UserContext } from "../users/UserProvider"

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
            <nav
                className="navbar bg-dark text-white flex-md-nowrap p-0 shadow"
                id="topnav"
            >
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <img
                                src={Logo}
                                id="nav-logo"
                                alt="logo"
                                height={70}
                                width={70}
                            />
                        </Link>
                    </li>
                </ul>
                <h4>
                    <b>
                        <i>Welcome, {currentUser?.firstName}!</i>
                    </b>
                </h4>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Explore">
                            Explore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/login"
                            onClick={() =>
                                sessionStorage.removeItem("routinely_user")
                            }
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
