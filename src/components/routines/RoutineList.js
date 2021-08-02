import React, { useContext, useEffect } from "react"
import { RoutineContext } from "./RoutineProvider"
import { RoutineItem } from "./RoutineItem"
import "./Routines.css"
import { useHistory } from "react-router-dom"
import { CelebRoutineList } from "../celebRoutines/CelebRoutineList"
import { CelebRoutineContext } from "../celebRoutines/CelebRoutineProvider"
import { CelebRoutineItem } from "../celebRoutines/CelebRoutineItem"

export const RoutineList = () => {
    const { routines, getRoutines } = useContext(RoutineContext)
    const { celebRoutines, getCelebRoutines } = useContext(CelebRoutineContext)
    const history = useHistory()

    useEffect(() => {
        getRoutines().then(getCelebRoutines)
    }, [])

    // const savedRoutines = celebRoutines.filter(
    //     (celebRoutine) =>
    //         celebRoutine.userId ===
    //         parseInt(sessionStorage.getItem("routinely_user"))
    // )

    // const addedRoutine = savedRoutines.map((celebRoutine) => {
    //     return (
    //         <CelebRoutineItem
    //             key={celebRoutine.id}
    //             celebRoutine={celebRoutine}
    //         />
    //     )
    // })

    return (
        <>
            <div className="routine__head">
                <h1>My Routines</h1>
                <svg
                    onClick={() => {
                        history.push("/routines/create")
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </div>
            <div>
                {routines.map((routine) => {
                    return <RoutineItem key={routine.id} routine={routine} />
                })}
            </div>
        </>
    )
}
