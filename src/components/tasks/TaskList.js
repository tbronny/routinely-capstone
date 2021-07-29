import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
// import { TasksContext } from "../routines/RoutineProvider"
import { TaskItem } from "./TaskItem"
import { useParams, useHistory } from "react-router-dom"
import "./Tasks.css"
import { RoutineContext } from "../routines/RoutineProvider"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    const { routines, getRoutines } = useContext(RoutineContext)
    const history = useHistory()
    const { routineId } = useParams()

    useEffect(() => {
        getTasks().then(getRoutines)
    }, [])

    const filteredTasks = tasks.filter((task) => {
        return task.routineId === parseInt(routineId)
    })

    const firstTask = filteredTasks[0]

    return (
        <>
            <div className="task__head">
                <h1>{firstTask.routine?.label}</h1>
                <button
                    onClick={() => {
                        history.push(`/tasks/create/${routineId}`)
                    }}
                >
                    Add
                </button>
            </div>
            {filteredTasks.map((task) => {
                return <TaskItem key={task.id} task={task} />
            })}
        </>
    )
}
