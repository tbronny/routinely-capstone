import React from "react"
import { Route } from "react-router-dom"
import { RoutineForm } from "./routines/RoutineForm"
import { RoutineList } from "./routines/RoutineList"
import { RoutineProvider } from "./routines/RoutineProvider"
import { UserProvider } from "./users/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"

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
                            <TaskList />
                        </Route>
                        <Route exact path="/tasks/create">
                            <TaskForm />
                        </Route>
                        <Route exact path="/tasks/edit/:taskId(\d+)">
                            <TaskForm />
                        </Route>
                    </TaskProvider>
                </RoutineProvider>
            </UserProvider>
        </>
    )
}
