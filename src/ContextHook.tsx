import GenericChild from "./GenericChild";
import { Context } from "./Context";

export default function ContextHook() {
  const value = { name: "John Doe" };
  return (
    <>
      <h2>Context Hook</h2>
      <p>
        The Context API provides data even to the deepest level of component in
        the react component tree without passing it in props
      </p>
      <Context.Provider value={value}>
        <GenericChild />
      </Context.Provider>
    </>
  );
}
