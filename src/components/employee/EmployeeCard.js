import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

// export const EmployeeCard = ({employee}) => (
//     <section className="employee">
//         <h3 className="employee__name">{employee.name}</h3>
//         <div className="employee__Location">{employee.location}</div>
//     </section>
// )

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./employee.svg')} alt="Employee ID" /> */}
          </picture>
          <h3><span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Location: {employee.location.name}</p>
          <Link to={`/employees/${employee.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Fire</button>
        </div>
      </div>
    );
}