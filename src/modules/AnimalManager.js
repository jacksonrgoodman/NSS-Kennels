const remoteURL = "http://localhost:5002"

export const getAnimalById = (id) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${id}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals/?_expand=location&_expand=customer&_expand=employee`)
  .then(result => result.json())
}

export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
  }).then(response => response.json())
}

export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}