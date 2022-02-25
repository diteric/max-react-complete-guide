import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selection, setSelection] = useState('2021');
  console.log(selection);

  const logNewSelection = (selection) => {
    console.log(selection);
    setSelection(selection);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onSelectionChanged={logNewSelection}
        selected={selection}
      ></ExpensesFilter>
      <ExpenseList items={props.items} selection={selection} />
    </Card>
  );
};

export default Expenses;
