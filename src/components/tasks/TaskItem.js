import React, { useContext } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import Swal from "sweetalert2"

export const TaskItem = ({ task }) => {
    const { removeTask } = useContext(TaskContext)
    const history = useHistory()

    const { routineId } = useParams()
    return (
        <article className="container">
            <div>
                <input type="checkbox" className="larger" />
            </div>
            <div
                className="task"
                onClick={() => {
                    Swal.fire({
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Edit`,
                        denyButtonText: `Delete`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            history.push(`/tasks/edit/${task.id}`)
                        } else if (result.isDenied) {
                            removeTask(task.id)
                            history.push(`/tasks/${routineId}`)
                        }
                    })
                }}
            >
                <h2 className="task__label">{task.label}</h2>

                <h2>{task.time}m</h2>
            </div>
        </article>
    )
}
