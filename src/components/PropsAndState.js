import React, { useState } from "react"
//? passes in name
export const PropsAndState = ({ yourName, yourPet }) => {
    //? setting the click count to zero
    let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //? good practice:
    //? make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
  //? then the return runs
  //? counts the clicks! HTML representation
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <h3>Your Pet is: {yourPet} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}