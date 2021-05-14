import { createContext, useState } from "react";

const initState = {
  tasks: [],
};

export const TasksContext = createContext(initState);

export const TasksContextProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initState);

  const createTask = (task) => {
    setState((prevState) => {
      prevState.tasks.push(task)
      return prevState;
    });
  };

  const provide = {
    ...state,
    createTask,
  };

  return (
    <TasksContext.Provider value={provide}>{children}</TasksContext.Provider>
  );
};
