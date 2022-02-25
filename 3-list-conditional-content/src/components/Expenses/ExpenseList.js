import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  const filteredItems = props.items.filter(
    (i) => i.date.getFullYear().toString() === props.selection
  );

  if (filteredItems.length === 0) {
    return (
      <div className='expenses-list__fallback'>
        <h2>Expenses Not Found</h2>
      </div>
    );
  }

  const filteredExpenseItems = filteredItems.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  return <div className='expenses-list'>{filteredExpenseItems}</div>;
};

export default ExpenseList;
