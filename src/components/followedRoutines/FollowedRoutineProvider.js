import React, { useState, createContext } from "react"

export const FollowedRoutineContext = createContext()

export const FollowedRoutineProvider = (props) => {
    const [followedRoutines, setFollowedRoutines] = useState([])

    const getFollowedRoutines = () => {
        return fetch(
            "http://localhost:8088/followedRoutines?_expand=celebRoutine"
        )
            .then((res) => res.json())
            .then(setFollowedRoutines)
    }

    return (
        <FollowedRoutineContext.Provider
            value={{ followedRoutines, getFollowedRoutines }}
        >
            {props.children}
        </FollowedRoutineContext.Provider>
    )
}
