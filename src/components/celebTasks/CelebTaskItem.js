import React from "react"

export const CelebTaskItem = ({ celebTask }) => {
    return (
        <article className="container">
            <div>
                <input type="checkbox" className="larger" />
            </div>
            <div className="celebTask">
                <h2 className="celebTask__label">{celebTask.label}</h2>
            </div>
        </article>
    )
}
