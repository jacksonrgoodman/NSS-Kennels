import React from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require('./dog.jpg')} alt="My Dog" /> */}
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <h5>Currently with: {animal.employee.name}</h5>
        <h5>Phone: {animal.customer.phone}</h5>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  );
}