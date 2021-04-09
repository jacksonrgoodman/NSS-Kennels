import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from './animal/AnimalEditForm'
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from './employee/EmployeeForm'
import { EmployeeEditForm } from './employee/EmployeeEditForm'
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"


export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
   
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser}/>
            </Route>

            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
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
                </section>
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>


            <Route exact path="/locations">
                <h2>Locations</h2>
                <section>
                    <LocationList />
                </section>
            </Route>

            <Route exact path="/customers">
                <h2>Customers</h2>
                <section>
                    <CustomerList />
                </section>
            </Route>

            <Route path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
            </Route>

        </>
    )
}