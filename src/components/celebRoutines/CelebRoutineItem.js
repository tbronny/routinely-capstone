import React from "react"
import { useHistory } from "react-router-dom"
import "./CelebRoutines.css"

export const CelebRoutineItem = ({ celebRoutine }) => {
    const history = useHistory()

    return (
        <article
            className="celebRoutine"
            onClick={() => {
                history.push(`/celebTasks/${celebRoutine.id}`)
            }}
        >
            <div className="celebRoutine__description">
                <h2 className="celebRoutine__label">{celebRoutine.label}</h2>
            </div>
            <div className="celebRoutine__bio">{celebRoutine.bio}</div>
        </article>
    )
}
