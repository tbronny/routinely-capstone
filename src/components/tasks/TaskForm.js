import React, { useState, useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { useHistory, useParams } from "react-router-dom"
import { RoutineContext } from "../routines/RoutineProvider"

export const TaskForm = () => {
    const { addTask, updateTask, getTaskById } = useContext(TaskContext)
    const { routines, getRoutines } = useContext(RoutineContext)
    const [task, setTask] = useState({
        // label: "",
        // time: 0,
        // routineId: 0,
    })
    const [isLoading, setIsLoading] = useState(true)
    const { taskId } = useParams()
    const { routineId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getRoutines().then(() => {
            if (taskId) {
                getTaskById(taskId).then((task) => {
                    setTask(task)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const handleInputChange = (event) => {
        const newTask = { ...task }
        newTask[event.target.id] = event.target.value
        setTask(newTask)
    }

    const handleClickSaveEvent = (event) => {
        event.preventDefault()
        if (task.label === "") {
            window.alert("Please submit a valid label")
        } else {
            setIsLoading(true)
            if (taskId) {
                updateTask({
                    id: task.id,
                    label: task.label,
                    time: parseInt(task.time),
                    routineId: task.routineId,
                }).then(() => history.push(`/tasks/${task.routineId}`))
            } else {
                addTask({
                    label: task.label,
                    time: parseInt(task.time),
                    routineId: parseInt(routineId),
                }).then(() => history.push(`/tasks/${routineId}`))
            }
        }
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm_title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Task Name:</label>
                    <input
                        type="text"
                        id="label"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Task Name"
                        value={task.label}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Minutes For Task: </label>
                    <input
                        type="number"
                        step="15"
                        id="time"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="0"
                        value={task.time}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    disabled={isLoading}
                    onClick={handleClickSaveEvent}
                >
                    {taskId ? "Save Task" : "Add Task"}
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        taskId
                            ? history.push(`/tasks/${task.routineId}`)
                            : history.push(`/tasks/${routineId}`)
                    }}
                >
                    Cancel
                </button>
            </fieldset>
        </form>
    )
}
