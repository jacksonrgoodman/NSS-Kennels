const remoteURL = "http://localhost:5002"

export const getLocationById = (id) => {
  //be sure your locations have good data and related to an employee and an animal
  return fetch(`${remoteURL}/locations/${id}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(result => result.json())
}