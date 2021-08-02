import React, { useState, createContext } from "react"

export const CelebTaskContext = createContext()

export const CelebTaskProvider = (props) => {
    const [celebTasks, setCelebTasks] = useState([])

    const getCelebTasks = () => {
        return fetch("http://localhost:8088/celebTasks?_expand=celebRoutine")
            .then((res) => res.json())
            .then(setCelebTasks)
    }

    return (
        <CelebTaskContext.Provider value={{ celebTasks, getCelebTasks }}>
            {props.children}
        </CelebTaskContext.Provider>
    )
}
