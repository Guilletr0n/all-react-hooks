import { Button } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

enum CounterStatesNames {
  "STOP",
  "PAUSED",
  "RUNNING"
}

export default function () {
  const intervalref = useRef<number | null>(null);
  const [displayCounter, setDisplayCounter] = useState(0);
  const [counterState, setCounterState] = useState(CounterStatesNames.STOP);
  const statesArr: string[] = ["Stop", "Paused", "Running"];

  // Start the interval
  const startInterval = () => {
    console.log(displayCounter);
    if (intervalref.current !== null) return;
    let manualCounter = displayCounter;
    intervalref.current = window.setInterval(() => {
      // This counter doesn't refresh the DOM
      manualCounter++;
      // This counter DOES refresh the DOM
      setDisplayCounter(manualCounter);
      setCounterState(CounterStatesNames.RUNNING);
    }, 1000);
  };

  // Pause the interval
  const pauseInterval = () => {
    console.log(intervalref.current);
    if (intervalref.current && intervalref.current !== displayCounter) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
      setCounterState(CounterStatesNames.PAUSED);
    } else {
      console.log("else");
      startInterval();
      setCounterState(CounterStatesNames.RUNNING);
    }

    console.log(statesArr[counterState]);
  };

  // Stop the interval
  const stopInterval = () => {
    if (intervalref.current) {
      setDisplayCounter(0);
      window.clearInterval(intervalref.current);
      intervalref.current = null;
      setCounterState(CounterStatesNames.STOP);
    }
  };

  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    // here's the cleanup function
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);
  //
  const timerRef = useRef<number | null>(null);
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (null !== timerRef.current) {
      timerRef.current = window.setTimeout(() => alert("Hey ??"), 1000);
    }
  };

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <h2>Manual Timer</h2>
      <p>
        Refs are a special attribute that are available on all React components.
        They allow us to create a reference to a given element / component when
        the component mounts.
      </p>
      <p>
        useRef allows us to easily use React refs. They are helpful (as in the
        example below) when we want to directly interact with an element, such
        as to clear its value or focus it, as with an input.
      </p>
      <p>
        We call useRef (at the top of a component) and attach the returned value
        to the element's ref attribute to refer to it.
      </p>
      <h3>State: {statesArr[counterState]}</h3>
      <p>Counter: {displayCounter}</p>
      <Button variant="outline" onClick={clickHandler}>
        Start Counter
      </Button>
      <Button onClick={startInterval}>Start Interval</Button>
      <Button onClick={stopInterval}>Stop Counter</Button>
      <button onClick={pauseInterval}>Pause Counter</button>
      <button
        onClick={() => {
          setDisplayCounter(0);
        }}
      >
        Reset Counter
      </button>
    </>
  );
}
