import Card from './Card';
import useConter from '../hooks/use-conter';

const ForwardCounter = () => {
  const counter = useConter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
