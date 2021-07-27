import React, { useContext, useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { RoutineContext } from "./RoutineProvider"

export const RoutineItem = ({ routine }) => {
    const { removeRoutine, getRoutineById } = useContext(RoutineContext)
    const history = useHistory()

    const [, setRoutine] = useState({})
    const { routineId } = useParams()

    useEffect(() => {
        getRoutineById(routineId).then((res) => {
            setRoutine(res)
        })
    }, [])

    const customFeed =
        routine.userId ===
        parseInt(sessionStorage.getItem("routinely_user")) ? (
            <>
                <article className="routine">
                    <div className="routine__description">
                        <h2 className="routine__label">
                            <Link to={`/tasks/${routine.id}`}>
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
