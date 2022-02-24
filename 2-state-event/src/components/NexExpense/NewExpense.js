import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDate = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseCreated(expenseDate);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseDate} />
    </div>
  );
};

export default NewExpense;
