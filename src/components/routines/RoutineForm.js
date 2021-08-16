import React, { useState, useContext, useEffect } from "react"
import { RoutineContext } from "./RoutineProvider"
import { useHistory, useParams } from "react-router-dom"
import { Picker } from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"

export const RoutineForm = () => {
    const { addRoutine, updateRoutine, getRoutineById } =
        useContext(RoutineContext)
    const [routine, setRoutine] = useState({
        label: "",
        icon: "",
        userId: 0,
    })
    const [isLoading, setIsLoading] = useState(true)
    const { routineId } = useParams()
    const history = useHistory()

    const [input, setInput] = useState("")
    const [showEmojis, setShowEmojis] = useState(false)

    useEffect(() => {
        if (routineId) {
            getRoutineById(routineId).then((event) => {
                setRoutine(event)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }, [])

    const handleInputChange = (event) => {
        const newRoutine = { ...routine }
        newRoutine[event.target.id] = event.target.value
        setRoutine(newRoutine)
    }

    const handleClickSaveEvent = (event) => {
        event.preventDefault()
        const currentUserId = parseInt(sessionStorage.getItem("routinely_user"))
        if (routine.label === "") {
            window.alert("Please submit a valid label")
        } else {
            setIsLoading(true)
            if (routineId) {
                updateRoutine({
                    id: routine.id,
                    label: routine.label,
                    icon: input,
                    userId: currentUserId,
                }).then(() => history.push("/"))
            } else {
                addRoutine({
                    label: routine.label,
                    icon: input,
                    userId: currentUserId,
                }).then(() => history.push("/"))
            }
        }
    }

    const addEmoji = (e) => {
        let sym = e.unified.split("-")
        let codesArray = []
        sym.forEach((el) => codesArray.push("0x" + el))
        let emoji = String.fromCodePoint(...codesArray)
        setInput(input + emoji)
    }

    return (
        <form className="routineForm">
            <h2 className="routineForm_title">New Routine</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Routine Name:</label>
                    <input
                        type="text"
                        id="label"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Routine Name"
                        value={routine.label}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label"></label>
                    <input
                        value={input}
                        onChange={handleInputChange}
                        type="text"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Icon"
                    />
                </div>
                <Picker onSelect={addEmoji} />
            </fieldset>
            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={handleClickSaveEvent}
            >
                {routineId ? "Save Routine" : "Add Routine"}
            </button>
        </form>
    )
}
