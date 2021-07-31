import React from "react"
import { Route } from "react-router-dom"
import { RoutineForm } from "./routines/RoutineForm"
import { RoutineList } from "./routines/RoutineList"
import { RoutineProvider } from "./routines/RoutineProvider"
import { UserProvider } from "./users/UserProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskForm } from "./tasks/TaskForm"
import { TaskList } from "./tasks/TaskList"
import { CelebRoutineProvider } from "./celebRoutines/CelebRoutineProvider"
import { CelebRoutineList } from "./celebRoutines/CelebRoutineList"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <RoutineProvider>
                    <TaskProvider>
                        {/* <section className="row">
                            <div className="column"> */}
                        <Route exact path="/">
                            <RoutineList />
                        </Route>
                        {/* </div>
                            <div className="column"> */}
                        <Route exact path="/tasks/:routineId(\d+)">
                            <TaskList />
                        </Route>
                        {/* </div>
                        </section> */}
                        <Route exact path="/routines/create">
                            <RoutineForm />
                        </Route>
                        <Route exact path="/routines/edit/:routineId(\d+)">
                            <RoutineForm />
                        </Route>
                        {/* <Route path="/tasks/:routineId(\d+)">
                            <TaskList />
                        </Route> */}
                        <Route exact path="/tasks/create/:routineId(\d+)">
                            <TaskForm />
                        </Route>
                        <Route exact path="/tasks/edit/:taskId(\d+)">
                            <TaskForm />
                        </Route>
                    </TaskProvider>
                </RoutineProvider>
            </UserProvider>

            <CelebRoutineProvider>
                <Route exact path="/Explore">
                    <CelebRoutineList />
                </Route>
            </CelebRoutineProvider>
        </>
    )
}
