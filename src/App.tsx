import "./styles.css";
import { UseStateHook, ReducerHook, UseEffectHook, Clock } from "./Hooks";
import ImperativeHandle from "./ImperativeHandle";
import ContextHook from "./ContextHook";
import ManualTimer from "./ManualTimer";

export default function App() {
  return (
    <div className="App">
      <h2>Mayor rules</h2>
      <ul>
        <li>
          Never call Hooks from inside a loop, condition or nested function
        </li>
        <li>Hooks should sit at the top-level of your component</li>
        <li>Only call Hooks from React functional components</li>
        <li>Never call a Hook from a regular function</li>
        <li>Hooks can call other Hooks</li>
      </ul>
      <UseStateHook />
      <ManualTimer />
      <ReducerHook />
      <UseEffectHook timerMs={2000} />
      <Clock />
      <ImperativeHandle />
      <ContextHook />
      <h2>All Hooks</h2>
      <ul className="check-list">
        <li>✔️ useState</li>
        <li>✔️ useEffect</li>
        <li>✔️ useContext</li>
        <li>✔️useReducer</li>
        <li>useCallback</li>
        <li>useMemo</li>
        <li>✔️useRef</li>
        <li>useImperativeHandle</li>
        <li>❌useLayoutEffect</li>
        <li>❌useDebugValue</li>
        <li>❌useTransition</li>
        <li>❌useId</li>
        <li>❌useSyncExternalStore</li>
        <li>❌useInsertionEffect</li>
      </ul>
    </div>
  );
}
