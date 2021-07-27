import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../Images/Logo.png"
import "./NavBar.css"

function myFunction() {
    var x = document.getElementById("topnav")
    if (x.className === "navbar bg-dark text-white flex-md-nowrap p-0 shadow") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}

export const NavBar = (props) => {
    return (
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
                            height={75}
                            width={75}
                        />
                    </Link>
                </li>
            </ul>
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
    )
}
