import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { CelebRoutineItem } from "../celebRoutines/CelebRoutineItem"
import { TaskContext } from "../tasks/TaskProvider"
import { RoutineContext } from "./RoutineProvider"

export const RoutineItem = ({ routine }) => {
    const { removeRoutine } = useContext(RoutineContext)
    const { tasks, getTasks } = useContext(TaskContext)
    const history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    const currentTasks = tasks.filter((task) => routine.id === task.routineId)

    const tasksArr = currentTasks.map((task) => {
        return task.time
    })

    let total = 0

    for (let i = 0; i < tasksArr.length; i++) {
        total += tasksArr[i]
    }

    let totalHours = total / 60

    let totalMinutes = Math.floor(total % 60)

    let customFeed =
        routine.userId ===
        parseInt(sessionStorage.getItem("routinely_user")) ? (
            <>
                <article className="routine">
                    <div className="routine__description">
                        <h2 className="routine__label">
                            <Link className="link" to={`/tasks/${routine.id}`}>
                                {routine.label}
                            </Link>
                        </h2>
                    </div>

                    <div className="routine__time">
                        <h4>
                            ~{Math.floor(totalHours)}h {totalMinutes}m
                        </h4>
                    </div>
                    <div className="button">
                        <button
                            onClick={() => {
                                removeRoutine(routine.id)
                                history.push("/")
                            }}
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => {
                                history.push(`/routines/edit/${routine.id}`)
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </article>
            </>
        ) : (
            ""
        )

    return <>{customFeed}</>
}
