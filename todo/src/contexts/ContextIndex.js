import React from "react";
import { FormContextProvider } from "./FormContext";

export const ContextIndex = (props) => {
  const { children } = props;
  return <FormContextProvider>{children}</FormContextProvider>;
};
