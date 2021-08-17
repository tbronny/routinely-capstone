import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Link } from "react-router-dom"

export const SimpleMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="125"
                    height="50"
                    fill="white"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Link className="menu-link" to="/">
                        My Routines
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-link" to="/Explore">
                        Explore
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-link" to="/About">
                        About
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-link" to="/Contact">
                        Contact
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link
                        className="menu-link"
                        to="/login"
                        onClick={() =>
                            sessionStorage.removeItem("routinely_user")
                        }
                    >
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    )
}
