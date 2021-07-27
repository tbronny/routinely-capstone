import React, { useContext, useEffect } from "react"
import { RoutineContext } from "./RoutineProvider"
import { UserContext } from "../users/UserProvider"
import { RoutineItem } from "./RoutineItem"
import "./Routines.css"
import { useHistory } from "react-router-dom"

export const RoutineList = () => {
    const { routines, getRoutines } = useContext(RoutineContext)
    const { users, getUsers } = useContext(UserContext)
    const history = useHistory()

    const currentUser = users.find((user) => {
        if (user.id === parseInt(sessionStorage.getItem("routinely_user")))
            return user
    })

    useEffect(() => {
        getRoutines().then(getUsers)
    }, [])

    return (
        <>
            <div className="routine__head">
                <h1>
                    <b>
                        <i>Welcome, {currentUser?.firstName}!</i>
                    </b>
                </h1>
                <button
                    onClick={() => {
                        history.push("/routines/create")
                    }}
                >
                    Add
                </button>
            </div>
            {routines.map((routine) => {
                return <RoutineItem key={routine.id} routine={routine} />
            })}
        </>
    )
}
