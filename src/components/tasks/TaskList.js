import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import { RoutineContext } from "../routines/RoutineProvider"
import { TaskItem } from "./TaskItem"
import { useParams, useHistory } from "react-router-dom"
import "./Tasks.css"
import { TaskActionButtons } from "./TaskActionButton"
import AddIcon from "@material-ui/icons/Add"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    const { routines, getRoutines } = useContext(RoutineContext)
    const history = useHistory()
    const { routineId } = useParams()

    useEffect(() => {
        getTasks().then(getRoutines)
    }, [])

    const filteredTasks = tasks.filter(
        (task) => task.routineId === parseInt(routineId)
    )

    const filteredRoutine = routines.find(
        (routine) => routine.id === parseInt(routineId)
    )

    const ConditionalRender = () => {
        if (filteredTasks.length < 1) {
            return (
                <div>
                    <h4 className="message">
                        No tasks in this routine!
                        <br />
                        <br />
                        Click the {<AddIcon />} below to add a task
                        <br />
                        <br />
                        or visit the explore tab in the menu to get some ideas.
                    </h4>
                </div>
            )
        } else {
            return (
                <div>
                    {filteredTasks.map((task) => {
                        return <TaskItem key={task.id} task={task} />
                    })}
                </div>
            )
        }
    }

    return (
        <>
            <div className="task__head">
                <h1
                    className="routinesLink"
                    onClick={() => {
                        history.push("/")
                    }}
                >
                    {filteredRoutine?.label}/Tasks
                </h1>
            </div>
            {ConditionalRender()}
            <div className="action">{TaskActionButtons()}</div>
        </>
    )
}
