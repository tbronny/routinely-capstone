import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { useHistory } from "react-router-dom"

export const RoutineActionButtons = () => {
    const history = useHistory()

    return (
        <div>
            <Fab
                color="inheret"
                aria-label="add"
                onClick={() => {
                    history.push("/routines/create")
                }}
            >
                <AddIcon />
            </Fab>
        </div>
    )
}
