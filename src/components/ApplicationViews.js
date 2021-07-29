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
                        <section className="row">
                            <div className="column">
                                <Route path="/">
                                    <RoutineList />
                                </Route>
                            </div>
                            <div className="column">
                                <Route path="/tasks/:routineId(\d+)">
                                    <TaskList />
                                </Route>
                            </div>
                        </section>
                        <Route path="/routines/create">
                            <RoutineForm />
                        </Route>
                        <Route path="/routines/edit/:routineId(\d+)">
                            <RoutineForm />
                        </Route>
                        {/* <Route path="/tasks/:routineId(\d+)">
                            <TaskList />
                        </Route> */}
                        <Route path="/tasks/create/:routineId(\d+)">
                            <TaskForm />
                        </Route>
                        <Route path="/tasks/edit/:taskId(\d+)">
                            <TaskForm />
                        </Route>
                    </TaskProvider>
                </RoutineProvider>
            </UserProvider>
        </>
    )
}
