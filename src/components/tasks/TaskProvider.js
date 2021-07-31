import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`).then((res) =>
            res.json()
        )
    }

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks?_expand=routine")
            .then((res) => res.json())
            .then(setTasks)
    }

    const addTask = (task) => {
        return fetch(`http://localhost:8088/tasks?_expand=routine`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }).then(getTasks)
    }
    const removeTask = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE",
        }).then(getTasks)
    }

    const updateTask = (task) => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }).then(getTasks)
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                getTasks,
                addTask,
                removeTask,
                getTaskById,
                updateTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
