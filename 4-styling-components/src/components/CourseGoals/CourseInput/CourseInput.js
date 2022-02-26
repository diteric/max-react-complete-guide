import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isInputValid ? 'black' : 'red')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.isInputValid ? '#ccc' : 'red')};
    background-color: ${(props) =>
      props.isInputValid ? 'transparent' : 'red'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length !== 0) {
      setIsInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false);
      return;
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isInputValid={isInputValid}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
