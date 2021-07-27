import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { UserContext } from "../users/UserProvider"
import { TaskItem } from "./TaskItem"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <div className="task__head">
                <h1>Tasks</h1>
            </div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} />
            })}
        </>
    )
}
