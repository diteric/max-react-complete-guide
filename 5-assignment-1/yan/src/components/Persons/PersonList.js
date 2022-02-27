import React from 'react';

const PersonList = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <p key={person.id}>
          {person.username} ({person.age} years old)
        </p>
      ))}
    </div>
  );
};

export default PersonList;
