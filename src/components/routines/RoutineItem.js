import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { TaskContext } from "../tasks/TaskProvider"
import { RoutineContext } from "./RoutineProvider"
import Swal from "sweetalert2"

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
                <article
                    className="routine"
                    onClick={(event) => {
                        if (event.target !== event.currentTarget) return
                        history.push(`/tasks/${routine.id}`)
                    }}
                >
                    <div className="routine__description">
                        <h2 className="routine__label">{routine.label}</h2>
                        <h4 className="routine__time">
                            ~{Math.floor(totalHours)}h {totalMinutes}m
                        </h4>
                    </div>

                    <div className="routine__options">
                        <svg
                            onClick={() => {
                                Swal.fire({
                                    showDenyButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: `Edit`,
                                    denyButtonText: `Delete`,
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        history.push(
                                            `/routines/edit/${routine.id}`
                                        )
                                    } else if (result.isDenied) {
                                        removeRoutine(routine.id)
                                        history.push("/")
                                    }
                                })
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            fill="currentColor"
                            class="bi bi-three-dots"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>
                </article>
            </>
        ) : (
            ""
        )

    return <>{customFeed}</>
}
