import React, { useContext, useEffect } from "react"
import { FollowedRoutineItem } from "./FollowedRoutinesItem"
import { FollowedRoutineContext } from "./FollowedRoutineProvider"

export const FollowedRoutineList = () => {
    const { followedRoutines, getFollowedRoutines } = useContext(
        FollowedRoutineContext
    )

    useEffect(() => {
        getFollowedRoutines()
    }, [])

    return (
        <>
            <div className="followedRoutine__head">
                <h1>My followedRoutines</h1>
            </div>
            <div>
                {followedRoutines.map((followedRoutine) => {
                    return (
                        <FollowedRoutineItem
                            key={followedRoutine.id}
                            followedRoutine={followedRoutine}
                        />
                    )
                })}
            </div>
        </>
    )
}
