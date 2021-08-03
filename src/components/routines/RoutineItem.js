import React, { useContext, useEffect } from "react"
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

    const currentRoutine = () => {
        if (
            routine.userId ===
            parseInt(sessionStorage.getItem("routinely_user"))
        ) {
            return (
                <>
                    {routine.tasks?.map((task) => {
                        return parseInt(task.time)
                    })}
                </>
            )
        }
    }

    const tasksArr = currentRoutine()

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
                        {tasksArr}
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
