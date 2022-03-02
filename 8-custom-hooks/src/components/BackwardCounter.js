import { useState, useEffect } from 'react';

import Card from './Card';
import useConter from '../hooks/use-conter';

const BackwardCounter = () => {
  const counter = useConter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
