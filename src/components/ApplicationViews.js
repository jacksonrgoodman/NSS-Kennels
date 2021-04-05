import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <h2>Animals</h2>
                <section>
                    <AnimalList />
                    {/* <AnimalCard /> */}
                </section>
            </Route>

            <Route path="/employees">
                <h2>Employees</h2>
                <section>
                    <EmployeeList />
                    {/* <EmployeeCard /> */}
                </section>
            </Route>

            <Route path="/locations">
                <h2>Locations</h2>
                <section>
                    <LocationList />
                    {/* <LocationCard /> */}
                </section>
            </Route>

            <Route path="/customers">
                <h2>Customers</h2>
                <section>
                    <CustomerList />
                    {/* <CustomerCard /> */}
                </section>
            </Route>
        </>
    )
}