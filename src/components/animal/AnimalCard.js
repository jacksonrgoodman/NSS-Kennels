import React from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'


export const AnimalCard = ({ animal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg').default} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {firstLetterCase(animal.name)}
        </span></h3>
        <h5>Currently with: {animal.employee.name}</h5>
        <h5>Phone: {animal.customer.phone}</h5>
        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}