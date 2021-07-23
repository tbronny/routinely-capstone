import React, { useState, createContext } from "react"

export const RoutineContext = createContext()

export const RoutineProvider = (props) => {
    const [routines, setRoutines] = useState([])

    const getRoutineById = (id) => {
        return fetch(`http://localhost:8088/routines/${id}?_expand=tasks`).then(
            (res) => res.json()
        )
    }

    const getRoutines = () => {
        return fetch("http://localhost:8088/routines?_expand=user")
            .then((res) => res.json())
            .then(setRoutines)
    }

    const addRoutine = (routine) => {
        return fetch("http://localhost:8088/routines?_expand=user", {
            method: "POST",
            headers: {
                "Content-Type": "applicatino/json",
            },
            body: JSON.stringify(routine),
        }).then(getRoutines)
    }
    const removeRoutine = (id) => {
        return fetch(`http://localhost:8088/routines/${id}`, {
            method: "DELETE",
        }).then(getRoutines)
    }

    return (
        <RoutineContext.Provider
            value={{
                routines,
                getRoutines,
                addRoutine,
                removeRoutine,
                getRoutineById,
            }}
        >
            {props.children}
        </RoutineContext.Provider>
    )
}
