import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import { FormContext } from "../contexts/FormContext";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "grid",
  },
}));

const Form = () => {
  const classes = useStyles();
  const context = useContext(FormContext);
  const { handleText, title, detail } = context;
  return (
    <div className={classes.formContainer}>
      <TextField
        name={"title"}
        value={title}
        label="タスク名"
        onChange={handleText}
      />
      <TextField
        name={"detail"}
        value={detail}
        label="詳細"
        onChange={handleText}
      />
    </div>
  );
};

export default Form;
