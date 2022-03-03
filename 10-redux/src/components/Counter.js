import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          Decrement
        </button>
      </div>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
