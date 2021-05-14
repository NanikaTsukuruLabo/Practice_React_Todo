import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { TasksContext } from "../contexts/TasksContext";
import { FormContext } from "../contexts/FormContext";

const useStyles = makeStyles({
  buttonContainer: {
    justifyContent: "flex-end",
  },
});

const SubmitButton = () => {
  const classes = useStyles();

  const formContext = useContext(FormContext);
  const { title, detail, clearForm } = formContext;

  const tasksContext = useContext(TasksContext);
  const { createTask } = tasksContext;
  const taskData = {
    title,
    detail,
  };

  const handleClick = () => {
    createTask(taskData);
    clearForm();
  };

  return (
    <CardActions className={classes.buttonContainer}>
      <IconButton onClick={handleClick}>
        <SendIcon />
      </IconButton>
    </CardActions>
  );
};

export default SubmitButton;
