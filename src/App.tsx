import React, { FC } from "react";
import Counter from "./components/Counter";
import { useAppSelector, useAppDispatch } from "./hooks/redux";
import { addCounter } from "./store/counterSlice";
import "./App.scss";

export type CounterType = {
  id: number,
  count: number;
  isFourthCounter: boolean;
}

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { counters } = useAppSelector(state => state.counter);

  const newCounter = { id: Date.now(), count: 0, isFourthCounter: false };

  const addNewCounter = () => {
    dispatch(addCounter(newCounter));
  }

  return (
    <>
      <h1>Счетчики</h1>
      <ul className="counters">
        {counters.length === 0 
        ? <p>Добавьте счетчик, чтобы увидеть результат</p> 
        : counters.map((counter: CounterType) => (
          <Counter key={counter.id} counter={counter} />
        ))}
        <button className="button" onClick={addNewCounter}>
          Добавить счетчик
        </button>
      </ul>
    </>
  );
};

export default App;
