import React, { useContext, useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import { RoutineContext } from "../routines/RoutineProvider"

export const TaskItem = () => {
    const { getRoutineById } = useContext(RoutineContext)
    const history = useHistory()

    const [routine, setRoutine] = useState({})
    const { routineId } = useParams()

    useEffect(() => {
        getRoutineById(routineId).then((res) => {
            setRoutine(res)
        })
    }, [])

    return (
        <article className="task">
            <h2 className="task__label">
                {routine.tasks?.map((task) => {
                    return task.label
                })}
            </h2>
        </article>
    )
}
