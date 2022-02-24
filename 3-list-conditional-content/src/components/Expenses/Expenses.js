import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selection, setSelection] = useState('2021');

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
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
