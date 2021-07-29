import React, { useContext, useEffect, useState } from "react"
import { RoutineContext } from "./RoutineProvider"
import { RoutineItem } from "./RoutineItem"
import "./Routines.css"
import { useHistory, useParams } from "react-router-dom"
import { TaskList } from "../tasks/TaskList"
import { Route } from "react-router"

export const RoutineList = () => {
    const { routines, getRoutines, getRoutineById } = useContext(RoutineContext)
    const history = useHistory()

    const [routine, setRoutine] = useState({})
    const { routineId } = useParams()

    useEffect(() => {
        getRoutines()
    }, [])

    useEffect(() => {
        getRoutineById(routineId).then((response) => {
            setRoutine(response)
        })
    }, [])

    // const displayDate = () => {
    //     const d = new Date()
    //     const n = d.toLocaleString()
    //     return n
    // }

    return (
        <>
            {/* <section className="row">
                <div className="column"> */}
            <div className="routine__head">
                <h1>My Routines</h1>
                {/* <h1>{displayDate()}</h1> */}
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
            {/* </div> */}
            {/* <div className="column">
                    <Route path="/tasks/:routineId(\d+)">
                        <TaskList />
                    </Route>
                </div> */}
            {/* </section> */}
        </>
    )
}
