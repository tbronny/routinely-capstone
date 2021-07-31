import React, { useState, createContext } from "react"

export const CelebRoutineContext = createContext()

export const CelebRoutineProvider = (props) => {
    const [celebRoutines, setCelebRoutines] = useState([])

    const getCelebRoutines = () => {
        return fetch("http://localhost:8088/celebRoutines?_embed=celebTasks")
            .then((res) => res.json())
            .then(setCelebRoutines)
    }

    return (
        <CelebRoutineContext.Provider
            value={{ celebRoutines, getCelebRoutines }}
        >
            {props.children}
        </CelebRoutineContext.Provider>
    )
}
