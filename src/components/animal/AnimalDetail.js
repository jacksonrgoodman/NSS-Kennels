import React, { useState, useEffect } from 'react';
import { getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    delete(animalId).then(() =>
    //   props.history.push("/animals")
        console.log("beans")
    );
  };

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          location: animal.location,
          customer: animal.customer
        });
        setIsLoading(false);
      });
  }, [animalId]);

  return (
    <section className="animal">
        <Link to={`/animals/`}>
            <button>Back to All Animals</button>
        </Link>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        {/* What's up with the question mark???? See below.*/}
        <div className="animal__location">Location: {animal.location?.name}</div>
        <div className="animal__owner">Customer: {animal.customer?.name}</div>
        <div className="animal__location">Phone: {animal.customer?.phone}</div>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
}
