import React from 'react';

const ErrorModal = (props) => {
  <div>
    <header>Title</header>
    <div>
      <p>{props.message}</p>
    </div>
    <footer>
      <button>Okay</button>
    </footer>
  </div>;
};

export default ErrorModal;
