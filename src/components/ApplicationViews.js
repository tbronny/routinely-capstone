import React from "react"
import { Route } from "react-router-dom"
import { RoutineForm } from "./routines/RoutineForm"
import { RoutineList } from "./routines/RoutineList"
import { RoutineProvider } from "./routines/RoutineProvider"
import { UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <RoutineProvider>
                    <Route exact path="/">
                        <RoutineList />
                    </Route>
                    <Route exact path="/routines/create">
                        <RoutineForm />
                    </Route>
                    <Route exact path="/routines/edit/:routineId(\d+)">
                        <RoutineForm />
                    </Route>
                </RoutineProvider>
            </UserProvider>
        </>
    )
}
