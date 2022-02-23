import './ExpenseItem.css';

function ExpenseItem(props) {
  const data = new Date()
  data.toISOString();
  console.log(props.date);
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
