import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Routinely
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item-logout">
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
    )
}
