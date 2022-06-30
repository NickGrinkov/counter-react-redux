import React, { useEffect, FC } from 'react';
import { CounterType } from "../App";
import { plusCount, minusCount } from "../store/counterSlice";
import Count from './Count';
import Close from "./Close";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

type CounterProps = {
  counter: CounterType;
};

const Counter: FC<CounterProps> = ({ counter }): JSX.Element => {
  const dispatch = useAppDispatch();

  const { count, isFourthCounter } = counter;

  useEffect(() => {
    if (isFourthCounter) {
      setInterval(() => dispatch(plusCount(counter)), 1000);
    }
  }, [isFourthCounter]);

  const onClickPlus = () => {
    dispatch(plusCount(counter));
  };

  const onClickMinus = () => {
    dispatch(minusCount(counter));
  };

  return (
    <li className="counter">
      {isFourthCounter 
	  ? <>
          <Count count={count} />
          <Close counter={counter} />
        </>
	  : <>
          <button className="minus" onClick={onClickMinus}>−</button>
          <Count count={count} />
          <button className="plus" onClick={onClickPlus}>+</button>
          <Close counter={counter} />
        </>}
    </li>
  );
};

export default Counter;