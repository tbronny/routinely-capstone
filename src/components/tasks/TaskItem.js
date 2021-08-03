import React, { useContext, useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import { RoutineContext } from "../routines/RoutineProvider"

export const TaskItem = ({ task }) => {
    const { removeTask } = useContext(TaskContext)
    const history = useHistory()

    const { routineId } = useParams()

    return (
        <article className="task">
            <h2 className="task__label">{task.label}</h2>

            <div className="button">
                <button
                    onClick={() => {
                        removeTask(task.id)
                        history.push(`/tasks/${routineId}`)
                    }}
                >
                    Delete
                </button>
                <button
                    onClick={() => {
                        history.push(`/tasks/edit/${task.id}`)
                    }}
                >
                    Edit
                </button>
            </div>

            <h2>{task.time}m</h2>
        </article>
    )
}
