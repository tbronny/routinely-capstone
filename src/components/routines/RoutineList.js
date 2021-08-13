import React, { useContext, useEffect } from "react"
import { RoutineContext } from "./RoutineProvider"
import { RoutineItem } from "./RoutineItem"
import "./Routines.css"
import { RoutineActionButtons } from "./RoutineActionButton"

export const RoutineList = () => {
    const { routines, getRoutines } = useContext(RoutineContext)

    useEffect(() => {
        getRoutines()
    }, [])

    return (
        <>
            <div className="routine__head">
                <h1>My Routines</h1>
            </div>
            <div>
                {routines.map((routine) => {
                    return <RoutineItem key={routine.id} routine={routine} />
                })}
            </div>
            <div className="action">{RoutineActionButtons()}</div>
        </>
    )
}
