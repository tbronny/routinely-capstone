import React from "react"
import { Route } from "react-router-dom"
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
                </RoutineProvider>
            </UserProvider>
        </>
    )
}
