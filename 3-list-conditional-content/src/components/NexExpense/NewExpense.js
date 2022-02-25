import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [shouldShowNewButton, setShouldShowNewButton] = useState(true);

  const saveExpenseDate = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseCreated(expenseDate);
    hideForm();
  };

  const hideForm = () => {
    setShouldShowNewButton(true);
  };

  return (
    <div className='new-expense'>
      {shouldShowNewButton ? (
        <button onClick={() => setShouldShowNewButton(false)}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDate}
          onCancel={() => setShouldShowNewButton(true)}
        />
      )}
    </div>
  );
};

export default NewExpense;
