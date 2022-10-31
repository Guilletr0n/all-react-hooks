import { useContext } from "react";
import { AppContextInterface } from "./interfaces";
import { Context } from "./Context";

export default function () {
  return (
    <>
      <h2>This is a generic child element</h2>
      <p>It can read context</p>
      <Context.Consumer>
        {(value) => <span>{value?.name}</span>}
      </Context.Consumer>
    </>
  );
}
