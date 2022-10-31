import { useReducer, useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const initialState = { count: 0 };
const initialTitle: String = "Welcome";
//const divRef = useRef<HTMLDivElement>(null);
let delayedTitle: String = "Al comienzo";

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

export function UseEffectHook(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      delayedTitle = `Retardo de ${timerMs} milisegundos`;
    }, timerMs);
    return () => clearTimeout(timer);
  }, [timerMs]);
  return (
    <>
      <h2>Use Effect</h2>
      <p>
        To perform Side Effects, that are actions the can change the component
        state from outside (API or DOM)
      </p>
      <p>
        Accepts a callback function (effect) which will be run every time the
        component re-renders
      </p>
      <p>The second argument is the dependencies array</p>
      <h2>{delayedTitle}</h2>
    </>
  );
}

export function Clock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {seconds} seconds have elapsed since mounting.
      </header>
    </div>
  );
}

export function UseStateHook() {
  const [count, setCount] = useState(initialTitle);
  return (
    <>
      <h2>Use State</h2>
      <p>
        The useState hook allows us to create state variables in a React
        function component
      </p>
      <h2>Title: {count}</h2>
      <Button
        onClick={() => {
          setCount("Edited");
        }}
      >
        Set Count
      </Button>
    </>
  );
}

export function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Use Reducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}
