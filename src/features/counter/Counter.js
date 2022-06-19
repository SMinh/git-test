import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter1.count);
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const [incrementByAmout, setIncrementAmount] = useState(0);

  const addValue = Number(incrementByAmout) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input
        type="text"
        value={incrementByAmout}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
