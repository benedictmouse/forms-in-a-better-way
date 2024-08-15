import React, { useState } from 'react'

const Form = () => {
  const [person, setPerson] = useState({
    name: "Benedict Omondi",
    age: 25,
    details: {
      address: "Nairobi",
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }
  function handleAgeChange(e) {
    setPerson({ ...person, age: e.target.value });
  }
  function handleAddressChange(e) {
    setPerson({ ...person, details: { ...person.details, address: e.target.value } });
  }
  function handleImageChange(e) {
    setPerson({ ...person, details: { ...person.details, image: e.target.value } });
  }

  return (
    <>

      <label>
        Name:
        <input type="text" value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={person.age} onChange={handleAgeChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={person.details.address} onChange={handleAddressChange} />
      </label>
      <label>
        Image:
        <input value={person.details.image} onChange={handleImageChange} />
      </label>
      <p>
        Name: {person.name}
        Age: {person.age}
        Address: {person.details.address}
        Image:

        <img
          src={person.details.image}
          alt={person.details.title}
        />
      </p>

    </>
  )
}

export default Form