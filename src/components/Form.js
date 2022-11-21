import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFirstNameChange(event) {
    setFormData({
      // formData is an object, so we need to copy all the key/value pairs
      ...formData,
      // we want to overwrite the lastName key with a new value
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      // formData is an object, so we need to copy all the key/value pairs
      ...formData,
      // we want to overwrite the lastName key with a new value
      lastName: event.target.value,
    });
  }

  return (
    <form>
      <input 
        type="text"
        onChange={formData.firstName}
        value={handleFirstNameChange}
      />
      <input 
        type="text" 
        onChange={formData.lastName} 
        value={handleLastNameChange} 
      />
    </form>
  );
}

export default Form;
