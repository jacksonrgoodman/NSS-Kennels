import React from 'react';
import "./Animal.css";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.jpg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <h5>Phone: {animal.customer.phone}</h5>
        <p>Breed: {animal.breed}</p>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
      </div>
    </div>
  );
}