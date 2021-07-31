import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { RoutineContext } from "./RoutineProvider"

export const RoutineItem = ({ routine }) => {
    const { removeRoutine } = useContext(RoutineContext)
    const history = useHistory()

    const customFeed =
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
