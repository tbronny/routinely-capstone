import React from "react"
import { Link } from "react-router-dom"

export const RoutineItem = ({ routine }) => {
    const customFeed =
        routine.userId ===
        parseInt(sessionStorage.getItem("routinely_user")) ? (
            <>
                <Link to={`/routines/tasks/${routine.id}`}>
                    <article className="routine">
                        <div className="routine__description">
                            <h2 className="routine__label">{routine.label}</h2>
                        </div>
                    </article>
                </Link>
            </>
        ) : (
            ""
        )

    return <>{customFeed}</>
}
