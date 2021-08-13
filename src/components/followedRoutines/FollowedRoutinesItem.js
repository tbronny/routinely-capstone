import React from "react"

export const FollowedRoutineItem = ({ followedRoutine }) => {
    return (
        <article className="followedRoutine">
            <h2 className="followedRoutine__label">
                {followedRoutine.celebRoutine?.label}
            </h2>
        </article>
    )
}
