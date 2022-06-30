import React, { FC } from 'react';
import { CounterType } from '../App';
import { useAppDispatch } from '../hooks/redux';
import { deleteCounter } from '../store/counterSlice';

type CloseType = {
	counter: CounterType;
}

const Close: FC<CloseType> = ({ counter }) => {
  const dispatch = useAppDispatch();

  const removeCounter = () => {
    dispatch(deleteCounter(counter));
  };
  
  return <button className="close" onClick={removeCounter}>✕</button>;
};

export default Close;