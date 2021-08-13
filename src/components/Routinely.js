import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserProvider } from "../components/users/UserProvider"
import "./Routinely.css"

const displayDate = () => {
    const d = new Date()
    const n = d.toLocaleString()
    return n
}

export const Routinely = () => (
    <>
        <Route
            render={() => {
                if (sessionStorage.getItem("routinely_user")) {
                    return (
                        <>
                            <UserProvider>
                                <NavBar />
                                <ApplicationViews />
                            </UserProvider>
                        </>
                    )
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)
