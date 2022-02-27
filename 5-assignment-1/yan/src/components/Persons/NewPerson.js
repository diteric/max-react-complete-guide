import React, { useState } from 'react';

const NewPerson = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameInputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const saveNewPerson = (event) => {
    event.preventDefault();

    if (username.length === 0 || age.length === 0) {
      console.log('Please enter a valid name and age (non-empty values)');
      return;
    } else {
      props.onAddPerson({
        id: Math.random(),
        username: username,
        age: Number(age),
      });
    }
  };

  return (
    <form onSubmit={saveNewPerson}>
      <div>
        <label>Username</label>
        <input onChange={usernameInputChangeHandler}></input>
        <label>Age(Years)</label>
        <input onChange={ageInputChangeHandler}></input>
      </div>
      <div>
        <button type='submit'>Add User</button>
      </div>
    </form>
  );
};

export default NewPerson;
