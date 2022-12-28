import React from 'react'


function Entregable(props) {
    const {name,photo,mail,phone,location} = props;
    const {title,first,last} = name
    const {city,state,country} = location
  return (
    <div className='card'>  
        <h1>{`${title} ${first} ${last}`}</h1>
        <img src={photo} alt="" />
        <ul>
        <li>{mail}</li>
        <li>{phone}</li>
        <li>{`${city} ${state} ${country}`}</li>
        </ul>
      </div>
  )
}

export default Entregable