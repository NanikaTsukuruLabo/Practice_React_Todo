import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'grid',
  }
}))

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <TextField label="タスク名" />
      <TextField label="詳細" />
    </div>
  );
};

export default Form;
