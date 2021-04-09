import React, { useState, useEffect } from "react"
import {updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import { useHistory, useParams } from "react-router-dom"
import "./EmployeeForm.css"
import { getAllLocations } from "../../modules/LocationManager"

export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "" });
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {employeeId} = useParams();
  const {locationId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: employee.locationId
    };

  updateEmployee(editedEmployee)
    .then(() => history.push("/employees")
    )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {//!LOCATIONS
    getAllLocations()
      .then(locationsFromAPI=> {
        setLocations(locationsFromAPI);
        setIsLoading(false);
      });
  }, []);
  // debugger
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>
            <select
              type="selects"
              required
              className="form-control"
              onChange={handleFieldChange}
              value={employee.locationId}
              id="locationId"
            >
              {locations.map(l =>
                <option 
                key={l.id}
                value={l.id}>{l.name}
                </option>
              )}
            </select>
            <label htmlFor="location">Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}