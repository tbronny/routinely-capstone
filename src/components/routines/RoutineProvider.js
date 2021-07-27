import React, { useState, createContext } from "react"

export const RoutineContext = createContext()

export const RoutineProvider = (props) => {
    const [routines, setRoutines] = useState([])

    const getRoutineById = (id) => {
        return fetch(`http://localhost:8088/routines/${id}`).then((res) =>
            res.json()
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
                "Content-Type": "application/json",
            },
            body: JSON.stringify(routine),
        }).then(getRoutines)
    }
    const removeRoutine = (id) => {
        return fetch(`http://localhost:8088/routines/${id}`, {
            method: "DELETE",
        }).then(getRoutines)
    }

    const updateRoutine = (routine) => {
        return fetch(`http://localhost:8088/routines/${routine.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(routine),
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
                updateRoutine,
            }}
        >
            {props.children}
        </RoutineContext.Provider>
    )
}
