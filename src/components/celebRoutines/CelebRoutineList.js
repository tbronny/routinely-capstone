import React, { useContext, useEffect } from "react"
import { CelebRoutineContext } from "./CelebRoutineProvider"
import { CelebRoutineItem } from "./CelebRoutineItem"
import "./CelebRoutines.css"
import { useHistory } from "react-router-dom"

export const CelebRoutineList = () => {
    const { celebRoutines, getCelebRoutines } = useContext(CelebRoutineContext)
    const history = useHistory()

    useEffect(() => {
        getCelebRoutines()
    }, [])

    return (
        <article className="celebRoutines">
            <div className="celebRoutine__head">
                <h1>Featured Routines</h1>
            </div>
            <div className="celebRoutine__body">
                {celebRoutines.map((celebRoutine) => {
                    return (
                        <CelebRoutineItem
                            key={celebRoutine.id}
                            celebRoutine={celebRoutine}
                        />
                    )
                })}
            </div>
        </article>
    )
}
