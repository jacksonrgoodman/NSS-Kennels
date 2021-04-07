import React, { useState, useEffect } from 'react';
import { deleteAnimal, getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom"
import { firstLetterCase } from '../../modules/helpers'

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  const history = useHistory();

  
  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then(animalFromAPI => {
      animalFromAPI.name = firstLetterCase(animalFromAPI.name)
      animalFromAPI.breed = firstLetterCase(animalFromAPI.breed)
      setAnimal(animalFromAPI);
    });
    setIsLoading(false);
  }, [animalId]);
  
  
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
    history.push("/animals")
    )
  };
  
  return (
    <section className="animal">
        <Link to="/animals/">
            <button>Back to All Animals</button>
        </Link>
        <div>
          <img src={require('./dog.svg').default} alt="My Dog" />
          <h3 className="animal__name">{animal.name}</h3>
          <div className="animal__breed">{animal.breed}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="animal__location">Location: {animal.location?.name}</div>
          <div className="animal__owner">Customer: {animal.customer?.name}</div>
          <div className="animal__location">Phone: {animal.customer?.phone}</div>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Discharge
          </button>
        </div>
    </section>
  );
}
