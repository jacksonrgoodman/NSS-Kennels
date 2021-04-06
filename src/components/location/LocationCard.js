import React from "react"
import "./Location.css"

// export const LocationCard = ({location}) => (
//     <section className="location">
//         <h3 className="location__name">{location.name}</h3>
//         <div className="location__address">{location.address}</div>
//     </section>
// )

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./location.svg')} alt="Location Image" /> */}
          </picture>
          <h3><span className="card-locationname">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Delete</button>
        </div>
      </div>
    );
}