import React, { useState, createContext } from "react"

export const CelebRoutineContext = createContext()

export const celebRoutineProvider = () => {
    const [celebRoutines, setCelebRoutines] = useState([])

    const getCelebRoutines = () => {
        return fetch("")
    }
}
