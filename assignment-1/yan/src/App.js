import React, { useState } from 'react';
import Card from './components/UI/Card';
import NewPerson from './components/Persons/NewPerson';
import PersonList from './components/Persons/PersonList';

function App() {
  const personsDB = [
    { id: '1', username: 'Yan', age: 21 },
    { id: '2', username: 'Alex', age: 5 },
  ];

  const [persons, setPersons] = useState(personsDB);

  const addPerson = (newP) => {
    setPersons((prev) => [newP, ...prev]);
  };

  return (
    <div>
      <Card>
        <NewPerson onAddPerson={addPerson}></NewPerson>
      </Card>
      <Card>
        <PersonList persons={persons}></PersonList>
      </Card>
    </div>
  );
}

export default App;
