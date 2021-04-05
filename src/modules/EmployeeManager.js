const remoteURL = "http://localhost:5002"

export const getEmployeeById = (id) => {
  //be sure your employees have good data and related to a location
  return fetch(`${remoteURL}/employees/${id}?_expand=location`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees/?_expand=location`)
  .then(result => result.json())
}