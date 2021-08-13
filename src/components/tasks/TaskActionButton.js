import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { useHistory, useParams } from "react-router-dom"

export const TaskActionButtons = () => {
    const history = useHistory()
    const { routineId } = useParams()

    return (
        <div>
            <Fab
                color="inheret"
                aria-label="add"
                onClick={() => {
                    history.push(`/tasks/create/${routineId}`)
                }}
            >
                <AddIcon />
            </Fab>
        </div>
    )
}
