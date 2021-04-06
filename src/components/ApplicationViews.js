import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}

            <Route exact path="/employees">
                <h2>Employees</h2>
                <section>
                    <EmployeeList />
                    {/* <EmployeeCard /> */}
                </section>
            </Route>

            <Route exact path="/locations">
                <h2>Locations</h2>
                <section>
                    <LocationList />
                    {/* <LocationCard /> */}
                </section>
            </Route>

            <Route exact path="/customers">
                <h2>Customers</h2>
                <section>
                    <CustomerList />
                    {/* <CustomerCard /> */}
                </section>
            </Route>
        </>
    )
}