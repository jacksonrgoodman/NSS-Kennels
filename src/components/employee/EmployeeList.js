import React, { useState, useEffect } from 'react'
//import the components we will need
import { EmployeeCard } from './EmployeeCard'
import { useHistory } from "react-router-dom"
import { getAllEmployees, deleteEmployee, getEmployeeById } from '../../modules/EmployeeManager'

export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const history = useHistory();

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return getAllEmployees()
    .then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use .map() to "loop over" the employees array to show a list of employee cards
  return (
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {history.push("/employees/create")}}>
            Hire New Employee
        </button>
      </section>
      <div className="container-cards">
        {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee}/>)}
      </div>
    </>
  );
};