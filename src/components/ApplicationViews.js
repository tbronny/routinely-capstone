import React from "react"
import { Route } from "react-router-dom"
import { RoutineForm } from "./routines/RoutineForm"
import { RoutineList } from "./routines/RoutineList"
import { RoutineProvider } from "./routines/RoutineProvider"
import { UserProvider } from "./users/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskItem } from "./tasks/TaskItem"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <RoutineProvider>
                    <TaskProvider>
                        <Route exact path="/">
                            <RoutineList />
                        </Route>
                        <Route exact path="/routines/create">
                            <RoutineForm />
                        </Route>
                        <Route exact path="/routines/edit/:routineId(\d+)">
                            <RoutineForm />
                        </Route>
                        <Route exact path="/tasks/:routineId(\d+)">
                            <TaskItem />
                        </Route>
                    </TaskProvider>
                </RoutineProvider>
            </UserProvider>
        </>
    )
}
