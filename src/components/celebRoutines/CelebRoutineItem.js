import { Link } from "@material-ui/core"
import React from "react"
import { useHistory } from "react-router-dom"
import "./CelebRoutines.css"

export const CelebRoutineItem = ({ celebRoutine }) => {
    const history = useHistory()

    return (
        <article
            className="celebRoutine"
            onClick={(event) => {
                if (event.target !== event.currentTarget) return
                history.push(`/celebTasks/${celebRoutine.id}`)
            }}
        >
            <div
                className="celebRoutine__description"
                onClick={() => {
                    history.push(`/celebTasks/${celebRoutine.id}`)
                }}
            >
                <h2 className="celebRoutine__label">{celebRoutine.label}</h2>
            </div>
            <div className="celebRoutine__bio">
                <a href={celebRoutine.bio}>
                    <i className="readMore">Read More</i>
                </a>
            </div>
        </article>
    )
}
