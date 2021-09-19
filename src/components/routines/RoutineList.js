import React, { useContext, useEffect } from "react"
import { RoutineContext } from "./RoutineProvider"
import AddIcon from "@material-ui/icons/Add"
import { RoutineItem } from "./RoutineItem"
import "./Routines.css"
import { RoutineActionButtons } from "./RoutineActionButton"

export const RoutineList = () => {
    const { routines, getRoutines } = useContext(RoutineContext)

    useEffect(() => {
        getRoutines()
    }, [])

    const currentRoutines = routines.filter(
        (r) => r.userId === parseInt(sessionStorage.getItem("routinely_user"))
    )

    const ConditionalRender = () => {
        if (currentRoutines.length < 1) {
            return (
                <div>
                    <h4 className="message">
                        You have a fresh start!
                        <br />
                        <br />
                        Click the {<AddIcon />} below to start creating a
                        routine.
                    </h4>
                </div>
            )
        } else {
            return (
                <div>
                    {routines.map((routine) => {
                        return (
                            <RoutineItem key={routine.id} routine={routine} />
                        )
                    })}
                </div>
            )
        }
    }

    console.log(currentRoutines.length)

    return (
        <>
            <div className="routine__head">
                <h1>My Routines</h1>
            </div>
            <div>{ConditionalRender()}</div>
            <div className="action">{RoutineActionButtons()}</div>
        </>
    )
}
