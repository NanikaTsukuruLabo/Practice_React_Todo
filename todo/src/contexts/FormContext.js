import { createContext, useState } from "react";

const initState = {
  title: "",
  detail: "",
};

export const FormContext = createContext(initState);

export const FormContextProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initState);

  const handleText = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const provide = {
    ...state,
    handleText,
  };

  return (
    <FormContext.Provider value={provide}>{children}</FormContext.Provider>
  );
};
