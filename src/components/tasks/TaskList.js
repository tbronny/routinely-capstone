import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import { RoutineContext } from "../routines/RoutineProvider"
import { TaskItem } from "./TaskItem"
import { useParams, useHistory } from "react-router-dom"
import "./Tasks.css"
import { TaskActionButtons } from "./TaskActionButton"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    const { routines, getRoutines } = useContext(RoutineContext)
    const history = useHistory()
    const { routineId } = useParams()

    useEffect(() => {
        getTasks().then(getRoutines)
    }, [])

    const filteredTasks = tasks.filter(
        (task) => task.routineId === parseInt(routineId)
    )

    const filteredRoutine = routines.find(
        (routine) => routine.id === parseInt(routineId)
    )

    return (
        <>
            <div className="task__head">
                <h1
                    className="routinesLink"
                    onClick={() => {
                        history.push("/")
                    }}
                >
                    {filteredRoutine?.label}
                </h1>
            </div>
            <div>
                {filteredTasks.map((task) => {
                    return <TaskItem key={task.id} task={task} />
                })}
            </div>
            <div className="action">{TaskActionButtons()}</div>
        </>
    )
}
