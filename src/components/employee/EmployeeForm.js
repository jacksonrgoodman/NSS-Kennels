import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addEmployee } from '../../modules/EmployeeManager';
import { getAllLocations } from "../../modules/LocationManager"
import './EmployeeForm.css'

export const EmployeeForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [employee, setEmployee] = useState({
		name: "",
		locationId: 0
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);

	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEmployee = { ...employee }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

    useEffect(() => {
		//load location data and setState
		getAllLocations()
			.then(locationsFromAPI => {
				setLocations(locationsFromAPI)
			})
	}, []);

	const handleClickSaveEmployee = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = employee.locationId

		if (locationId === 0) {
			window.alert("Please select a location")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addEmployee(employee)
				.then(() => history.push("/employees"))
		}
	}

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Hire Employee
          </button>
		</form>
	)
};