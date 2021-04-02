const remoteURL = "http://localhost:5002"

  export const getAnimalById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
    .then(res => res.json())
  }

  export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(result => result.json())
  }