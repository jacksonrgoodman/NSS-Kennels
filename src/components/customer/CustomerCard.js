import React from "react"
import "./Customer.css"

// export const CustomerCard = ({customer}) => (
//     <section className="customer">
//         <h3 className="customer__name">{customer.name}</h3>
//         <div className="customer__address">Phone: {customer.phone}</div>
//     </section>
// )

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Phone: {customer.phone}</p>
          <p>Address: {customer.address}</p>
        </div>
      </div>
    );
}