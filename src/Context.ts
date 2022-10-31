import { createContext } from "react";
import { AppContextInterface } from "./interfaces";

export const Context = createContext<AppContextInterface | null>(null);
