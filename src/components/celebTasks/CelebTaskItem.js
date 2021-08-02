import React from "react"

export const CelebTaskItem = ({ celebTask }) => {
    return (
        <article className="celebTask">
            <h2 className="celebTask__label">{celebTask.label}</h2>
        </article>
    )
}
