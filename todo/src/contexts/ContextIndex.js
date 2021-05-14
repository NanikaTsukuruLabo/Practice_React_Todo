import React from "react";
import { FormContextProvider } from "./FormContext";
import { TasksContextProvider } from "./TasksContext";

export const ContextIndex = (props) => {
  const { children } = props;
  return (
    <FormContextProvider>
      <TasksContextProvider>
        {children}
        </TasksContextProvider>
    </FormContextProvider>
  );
};
