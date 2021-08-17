import React, { useContext, useEffect, useState } from "react"
import { CelebTaskContext } from "./CelebTaskProvider"
import { CelebRoutineContext } from "../celebRoutines/CelebRoutineProvider"
import { CelebTaskItem } from "./CelebTaskItem"
import { useHistory, useParams } from "react-router-dom"
import "./CelebTasks.css"

export const CelebTaskList = () => {
    const { celebTasks, getCelebTasks } = useContext(CelebTaskContext)
    const { celebRoutines, getCelebRoutines } = useContext(CelebRoutineContext)
    const { celebRoutineId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getCelebTasks().then(getCelebRoutines)
    }, [])

    const filteredCelebTasks = celebTasks.filter(
        (celebTask) => celebTask.celebRoutineId === parseInt(celebRoutineId)
    )

    const filteredCelebRoutine = celebRoutines.find(
        (celebRoutine) => celebRoutine.id === parseInt(celebRoutineId)
    )

    return (
        <>
            <div className="celebTask__head">
                <h1
                    className="routinesLink"
                    onClick={() => {
                        history.push("/explore")
                    }}
                >
                    {filteredCelebRoutine?.label}
                </h1>
            </div>
            <div>
                {filteredCelebTasks.map((celebTask) => {
                    return (
                        <CelebTaskItem
                            key={celebTask.id}
                            celebTask={celebTask}
                        />
                    )
                })}
            </div>
        </>
    )
}
